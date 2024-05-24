import express, { Request, Response, NextFunction, Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { HTTPResponseBody, HTTPResponseBodyResult } from '../types/HTTPResponse';
import { HTTPSuccessType, HTTPSuccessMessage, HTTPSuccessStatus } from '../types/HTTPSuccess';
import { HTTPErrorType, HTTPErrorMessage, HTTPErrorStatus, HTTPError, BadRequestError, UnauthorizedError, ForbiddenError, NotFoundError, ConflictError, InternalServerError } from '../types/HTTPError';
import { UserEmailNotificationBuilder } from '../builders/UserEmailNotificationBuilder';
import { processUserPasswordCode } from '../utils/UserPasswordCodeUtils';

const prisma = new PrismaClient();

export const createUser = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
              email: req.body.data.email,
              active: true
            },
          });
        if (user) {
            throw new ConflictError("User already exists");
        }
        const record = await prisma.user.create({
            data: { ...req.body.data},
        });
        new UserEmailNotificationBuilder()
        .withUserId(record.id)
        .withSubject("Account created")
        .withTemplate("UserCreated")
        .withContext({
            firstName: record.firstName
        })
        .send();
        let userPasswordCode = await processUserPasswordCode(record);
        let responseBodyResult = new HTTPResponseBodyResult(HTTPSuccessMessage.RECORD_CREATED, HTTPSuccessType, HTTPSuccessStatus.CREATED, req.originalUrl);
        let responseBody = new HTTPResponseBody(record, responseBodyResult);
        res.status(200).json(responseBody);
    } catch (error) {
        next(error as HTTPError);
    }
};

export const findUser = async (req: Request, res: Response, next:NextFunction) => {
    try {
        if(req.body.middlewareData.permissionsConditions && req.body.middlewareData.userId !== req.body.middlewareData.permissionsConditions.userId) {
            throw new ForbiddenError();
        }
        const record = await prisma.user.findUnique({
            where: {
              id: req.body.middlewareData.userId,
            },
        });
        if (!record) {
            throw new NotFoundError("User not found");
        }
        let responseBodyResult = new HTTPResponseBodyResult(HTTPSuccessMessage.RECORD_FOUND, HTTPSuccessType, HTTPSuccessStatus.OK, req.originalUrl);
        let responseBody = new HTTPResponseBody(record, responseBodyResult);
        res.status(200).json(responseBody);
    } catch (error) {
        next(error as HTTPError);
    }
}

export const findUsers = async (req: Request, res: Response, next:NextFunction) => {
    try {
        let records;
        if(req.body.middlewareData.permissionsConditions) {
            records = await prisma.user.findMany({
                where: {
                    id: req.body.middlewareData.permissionsConditions.userId
                }
            });
        } else {
            records = await prisma.user.findMany();
        }
        if (records.length === 0) {
            throw new NotFoundError("User not found");
        }
        let responseBodyResult = new HTTPResponseBodyResult(HTTPSuccessMessage.RECORDS_FOUND, HTTPSuccessType, HTTPSuccessStatus.OK, req.originalUrl);
        let responseBody = new HTTPResponseBody(records, responseBodyResult);
        res.status(200).json(responseBody);
    } catch (error) {
        next(error as HTTPError);
    }
}

export const updateUser = async (req: Request, res: Response, next:NextFunction) => {
    try {
        if(req.body.middlewareData.permissionsConditions && req.body.middlewareData.userId !== req.body.middlewareData.permissionsConditions.userId) {
            throw new ForbiddenError();
        }
        const user = await prisma.user.findUnique({
            where: {
              id: req.body.middlewareData.userId,
            },
        });
        if (!user) {
            throw new NotFoundError("User not found");
        }
        const record = await prisma.user.update({
            where: {
              id: req.body.middlewareData.userId,
            },
            data: { ...req.body.data },
        });
        let responseBodyResult = new HTTPResponseBodyResult(HTTPSuccessMessage.RECORD_UPDATED, HTTPSuccessType, HTTPSuccessStatus.OK, req.originalUrl);
        let responseBody = new HTTPResponseBody(record, responseBodyResult);
        res.status(200).json(responseBody);
    } catch (error) {
        next(error as HTTPError);
    }
}

export const deleteUser = async (req: Request, res: Response, next:NextFunction) => {
    try {
        if(req.body.middlewareData.permissionsConditions && req.body.middlewareData.userId !== req.body.middlewareData.permissionsConditions.userId) {
            throw new ForbiddenError();
        }
        const user = await prisma.user.findUnique({
            where: {
              id: req.body.middlewareData.userId,
            },
        });
        if (!user) {
            throw new NotFoundError("User not found");
        }
        const record = await prisma.user.delete({
            where: {
              id: req.body.middlewareData.userId,
            },
          });
        let responseBodyResult = new HTTPResponseBodyResult(HTTPSuccessMessage.RECORD_DELETED, HTTPSuccessType, HTTPSuccessStatus.OK, req.originalUrl);
        let responseBody = new HTTPResponseBody(record, responseBodyResult);
        res.status(200).json(responseBody);
    } catch (error) {
        next(error as HTTPError);
    }
}

export const deactiveUser = async (req: Request, res: Response, next:NextFunction) => {
    try {
        if(req.body.middlewareData.permissionsConditions && req.body.middlewareData.userId !== req.body.middlewareData.permissionsConditions.userId) {
            throw new ForbiddenError();
        }
        const user = await prisma.user.findUnique({
            where: {
              id: req.body.middlewareData.userId,
            },
        });
        if (!user) {
            throw new NotFoundError("User not found");
        }
        const userDeactivationCode = await prisma.userDeactivationCode.findUnique({
            where: {
              code: req.body.data.code,
              userId: req.body.middlewareData.userId,
            },
        });
        if (!userDeactivationCode) {
            throw new UnauthorizedError("Code not found");
        }
        if (userDeactivationCode.active === false) {
            throw new UnauthorizedError("Code already deactivated");
        }
        if (userDeactivationCode.expiresAt < new Date()) {
            throw new UnauthorizedError("Code expired");
        }

        const record = await prisma.user.update({
            where: {
                id: userDeactivationCode.userId
            },
            data: {
                active: false
            }
        });
        let responseBodyResult = new HTTPResponseBodyResult(HTTPSuccessMessage.RECORD_DEACTIVATED, HTTPSuccessType, HTTPSuccessStatus.OK, req.originalUrl);
        let responseBody = new HTTPResponseBody(record, responseBodyResult);
        res.status(200).json(responseBody);
    } catch (error) {
        next(error as HTTPError);
    }
}

export const verifyUser = async (req: Request, res: Response, next:NextFunction) => {
    try {
        if(req.body.middlewareData.permissionsConditions && req.body.middlewareData.userId !== req.body.middlewareData.permissionsConditions.userId) {
            throw new ForbiddenError();
        }
        const user = await prisma.user.findUnique({
            where: {
                id: req.body.middlewareData.userId,
            },
        });
        if (!user) {
            throw new NotFoundError("User not found");
        }
        const userVerificationCode = await prisma.userVerificationCode.findUnique({
            where: {
                code: req.body.data.code,
                userId: req.body.middlewareData.userId,
            },
        });
        if (!userVerificationCode) {
            throw new UnauthorizedError("Code not found");
        }
        if (userVerificationCode.active === false) {
            throw new UnauthorizedError("Code already deactivated");
        }
        if (userVerificationCode.expiresAt < new Date()) {
            throw new UnauthorizedError("Code expired");
        }

        const record = await prisma.user.update({
            where: {
                id: userVerificationCode.userId
            },
            data: {
                emailVerified: true
            }
        });
        let responseBodyResult = new HTTPResponseBodyResult(HTTPSuccessMessage.RECORD_CHECKED, HTTPSuccessType, HTTPSuccessStatus.OK, req.originalUrl);
        let responseBody = new HTTPResponseBody(record, responseBodyResult);
        res.status(200).json(responseBody);
    } catch (error) {
        next(error as HTTPError);
    }
}