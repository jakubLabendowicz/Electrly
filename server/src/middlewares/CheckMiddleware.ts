import { Request, Response, NextFunction} from 'express';
import { HTTPResponseBody, HTTPResponseBodyResult } from '../types/HTTPResponse';
import { HTTPSuccessType, HTTPSuccessMessage, HTTPSuccessStatus } from '../types/HTTPSuccess';
import { HTTPErrorType, HTTPErrorMessage, HTTPErrorStatus, HTTPError, BadRequestError, UnauthorizedError, ForbiddenError, NotFoundError, ConflictError, InternalServerError } from '../types/HTTPError';
import jwt, { Secret, JwtPayload } from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';
import { log } from 'console';
const prisma = new PrismaClient();

export const checkAuthorization = (requiredTokens: string[]) => {
    return async (req:Request, res:Response, next:NextFunction) => {    
        try {
            const headerToken = req.header('Authorization')?.replace('Bearer ', '');
            if(!headerToken) {
                throw new UnauthorizedError("No token provided");
            }
            const tokenSecret: Secret = process.env.TOKEN_SECRET as Secret;
            if(!tokenSecret) {
                throw new BadRequestError("No token secret provided");
            }
            const decoded = jwt.verify(headerToken, tokenSecret);
            if(!decoded) {
                throw new UnauthorizedError("Invalid token");
            }
            if(requiredTokens.length > 0 && (!(decoded as any).tokenType || !requiredTokens.includes((decoded as any).tokenType))) {
                throw new UnauthorizedError("Invalid token type");
            }
            let tokenType = (decoded as any).tokenType;
            let token;
            if (tokenType === "USER_ACCESS_TOKEN") {
                token = await prisma.userAccessToken.findUnique({
                    where: {
                      token: headerToken,
                    },
                    include: {
                        user: true
                    }
                });
            } else if (tokenType === "USER_REFRESH_TOKEN") {
                token = await prisma.userRefreshToken.findUnique({
                    where: {
                      token: headerToken,
                    },
                    include: {
                        user: true
                    }
                });
            } else if (tokenType === "CLIENT_ACCESS_TOKEN") {
                token = await prisma.clientAccessToken.findUnique({
                    where: {
                      token: headerToken,
                    },
                    include: {
                        user: true,
                        client: true
                    }
                });
            } else if (tokenType === "CLIENT_REFRESH_TOKEN") {
                token = await prisma.clientRefreshToken.findUnique({
                    where: {
                      token: headerToken,
                    },
                    include: {
                        user: true,
                        client: true
                    }
                });
            }
            if (!token) {
                throw new NotFoundError("Token not found");
            }
            if (token.expiresAt < new Date()) {
                throw new UnauthorizedError("Token expired");
            }
            if (token.active === false) {
                throw new UnauthorizedError("Token deactivated");
            }
            if(!req.body.middlewareData) req.body.middlewareData = {};
            (token as any).tokenType = tokenType;
            req.body.middlewareData.token = token;
            next();
        } catch (error) {
            if(requiredTokens.length > 0) {
                next(error as HTTPError);
            } else {
                next();
            }
        }
    }
}

export const checkUserAgent = () => {
    return async (req:Request, res:Response, next:NextFunction) => {
        try {
            const userAgent = req.header('User-Agent');
        } catch (error) {
            next(error as HTTPError);
        }
    }
}

export const checkPermissions = (requiredPermissions: string[]) => {
    return async (req:Request, res:Response, next:NextFunction) => {
        try {
            if(!req.body.middlewareData.token) {
                throw new UnauthorizedError("No access token provided");
            }
            let includeUserPermissions = false;
            let userPermissions: string[] = [];
            let includeClientAllowedPermissions = false;
            let clientAllowedPermissions: string[] = [];
            let finalPermissions: string[] = [];
            let compatiblePermissions: string[] = [];
            if(req.body.middlewareData.token.userId) {
                const user = await prisma.user.findUnique({
                    where: {
                      id: req.body.middlewareData.token.userId,
                    },
                    include: {
                        userRoles: {
                            where: {
                                active: true
                            },
                            include: {
                                role: {
                                    include: {
                                        rolePermissions: {
                                            where: {
                                                active: true
                                            },
                                            include: {
                                                permission: {
                                                    include: {
                                                        childPermissions: {
                                                            where: {
                                                                active: true
                                                            },
                                                            include: {
                                                                childPermissions: true
                                                            }
                                                        }
                                                    }
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                        }
                    },
                });
                if (!user) {
                    throw new NotFoundError("User not found");
                }
                user.userRoles.forEach(userRole => {
                    if(userRole.role.active === false) return;
                    userRole.role.rolePermissions.forEach(rolePermission => {
                        if(rolePermission.permission.active === false) return;
                        if(!userPermissions.includes(rolePermission.permission.code)) {
                            userPermissions.push(rolePermission.permission.code);
                        }
                        rolePermission.permission.childPermissions.forEach(childPermission => {
                            if(childPermission.active === false) return;
                            if(!userPermissions.includes(childPermission.code)) {
                                userPermissions.push(childPermission.code);
                            }
                            childPermission.childPermissions.forEach(childPermission => {
                                if(childPermission.active === false) return;
                                if(!userPermissions.includes(childPermission.code)) {
                                    userPermissions.push(childPermission.code);
                                }
                            });
                        });
                    });
                });
                includeUserPermissions = true;
            }
            if(req.body.middlewareData.token.clientId) {
                const client = await prisma.client.findUnique({
                    where: {
                      id: req.body.middlewareData.token.clientId,
                    },
                    include: {
                        clientAllowedScopes: {
                            where: {
                                active: true,
                                userId: req.body.middlewareData.token.userId
                            },
                            include: {
                                scope: {
                                    include: {
                                        scopePermissions: {
                                            where: {
                                                active: true
                                            },
                                            include: {
                                                permission: {
                                                    include: {
                                                        childPermissions: {
                                                            where: {
                                                                active: true
                                                            },
                                                            include: {
                                                                childPermissions: true
                                                            }
                                                        }
                                                    }
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                        }
                    },
                });
                if (!client) {
                    throw new NotFoundError("Client not found");
                }
                client.clientAllowedScopes.forEach(clientScope => {
                    clientScope.scope.scopePermissions.forEach(scopePermission => {
                        if(!clientAllowedPermissions.includes(scopePermission.permission.code)) {
                            clientAllowedPermissions.push(scopePermission.permission.code);
                        }
                        scopePermission.permission.childPermissions.forEach(childPermission => {
                            if(!clientAllowedPermissions.includes(childPermission.code)) {
                                clientAllowedPermissions.push(childPermission.code);
                            }
                            childPermission.childPermissions.forEach(childPermission => {
                                if(!clientAllowedPermissions.includes(childPermission.code)) {
                                    clientAllowedPermissions.push(childPermission.code);
                                }
                            });
                        });
                    });
                });
                includeClientAllowedPermissions = true;
            }
            if(includeUserPermissions && includeClientAllowedPermissions) {
                finalPermissions = userPermissions.filter(value => clientAllowedPermissions.includes(value));
            } else if(includeUserPermissions) {
                finalPermissions = userPermissions;
            } else if(includeClientAllowedPermissions) {
                finalPermissions = clientAllowedPermissions;
            }
            if(requiredPermissions.length > 0) {
                compatiblePermissions = requiredPermissions.filter(value => finalPermissions.includes(value));
            }
            if(compatiblePermissions.length === 0) {
                throw new ForbiddenError();
            }

            if(!req.body.middlewareData) req.body.middlewareData = {};
            req.body.middlewareData.permissions = compatiblePermissions;

            let permissionsConditions: any = {};
            let hasAnyPermission = false;
            let hasOwnPermission = false;
            compatiblePermissions.forEach(permission => {
                if(permission.includes("ANY")) hasAnyPermission = true;
                if(permission.includes("OWN")) hasOwnPermission = true;
            });
            if(!hasAnyPermission && hasOwnPermission) {
                permissionsConditions = {
                    userId: req.body.middlewareData.token.userId
                };
                req.body.middlewareData.permissionsConditions = permissionsConditions;
            }
            next();
        } catch (error) {
            if(requiredPermissions.length > 0) {
                next(error as HTTPError);
            } else {
                next();
            }
        }
    }
}

export const checkFindPermissions = () => {
    return async (req:Request, res:Response, next:NextFunction) => {
        try {
            let permissionsConditions: any = {};
            (req.body.middlewareData.permissions as string[]).forEach(permission => {
                if(permission.includes("ANY")) next();
                if(permission.includes("OWN")) {
                    permissionsConditions = {
                        userId: req.body.middlewareData.token.userId
                    };
                }
            });
            if(!req.body.middlewareData) req.body.middlewareData = {};
            req.body.middlewareData.permissionsConditions = permissionsConditions;
            next();
        } catch (error) {
            next(error as HTTPError);
        }
    }
}

export const checkUserId = async (req:Request, res:Response, next:NextFunction) => {
    try {
        if(req.params.uid === "me" || req.params.uid === "self") {
            if(!req.body.middlewareData.token) {
                throw new BadRequestError("No token provided");
            }
            if(!req.body.middlewareData) req.body.middlewareData = {};
            req.body.middlewareData.userId = req.body.middlewareData.token.userId;
        } else {
            const user = await prisma.user.findFirst({
                where: {
                    OR: [
                        {
                            id: req.params.uid,
                        },
                        {
                            nickname: req.params.uid,
                        },
                        {
                            email: req.params.uid,
                        },
                    ],
                },
            });
            if (!user) {
                throw new NotFoundError("User not found");
            }
            if(!req.body.middlewareData) req.body.middlewareData = {};
            req.body.middlewareData.userId = user.id;
        }
        next();
    } catch (error) {
        next(error as HTTPError);
    }
};

export const checkBodyData = (schema: any) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { error, value } = await schema.validate(req.body.data);
            if (!req.body.middlewareData) req.body.middlewareData = {};
            req.body.middlewareData.bodyData = {
                error: error,
                value: value
            }
            if (error) {
                throw new BadRequestError(error.message);
            }
            next();
        } catch (error) {
            next(error as HTTPError);        
        }
    };
}

export const showMiddlewareData = async (req: Request, res: Response, next: NextFunction) => {
    try {
        console.log(req.body.middlewareData);
        next();
    } catch (error) {
        next(error as HTTPError);
    }
}