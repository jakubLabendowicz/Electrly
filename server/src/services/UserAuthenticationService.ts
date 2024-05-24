import express, { Request, Response, NextFunction, Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { HTTPResponseBody, HTTPResponseBodyResult } from '../types/HTTPResponse';
import { HTTPSuccessType, HTTPSuccessMessage, HTTPSuccessStatus } from '../types/HTTPSuccess';
import { HTTPErrorType, HTTPErrorMessage, HTTPErrorStatus, HTTPError, BadRequestError, UnauthorizedError, ForbiddenError, NotFoundError, ConflictError, InternalServerError } from '../types/HTTPError';
import jwt, {Secret} from 'jsonwebtoken';
import { UserEmailNotificationBuilder } from '../builders/UserEmailNotificationBuilder';
const bcrypt = require("bcrypt");
const prisma = new PrismaClient();

export const createUserToken = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
              email: req.body.data.email,
            },
            include: {
                userPasswords: {
                    where: {
                        active: true
                    },
                    orderBy: {
                        createdAt: 'desc'
                    },
                }
            }
        });
        if (!user) {
            throw new NotFoundError("User not found");
            }
        if (user.active === false) {
            throw new UnauthorizedError("User already deactivated");
        }
        if (user.userPasswords.length === 0) {
            throw new NotFoundError("No password set");
        }

        let validPassword = await bcrypt.compare(
            req.body.data.password,
            user.userPasswords[0].passwordHash
        )
        if (!validPassword) {
            throw new UnauthorizedError("Wrong password");
        }

        const tokenSecret: Secret = process.env.TOKEN_SECRET as Secret;

        const userRefreshToken = await prisma.userRefreshToken.create({
            data: {
                userId: user.id,
                token: jwt.sign({userId: user.id, tokenType: "USER_REFRESH_TOKEN"}, tokenSecret, {expiresIn: '7d'}),
                expiresAt: new Date(Date.now() + 604800000)
            },
        });
        const userAccessToken = await prisma.userAccessToken.create({
            data: {
                userId: user.id,
                token: jwt.sign({userId: user.id, tokenType: "USER_ACCESS_TOKEN"}, tokenSecret, {expiresIn: '1d'}),
                expiresAt: new Date(Date.now() + 86400000),
                userRefreshTokenId: userRefreshToken.id
            },
        });
        new UserEmailNotificationBuilder()
        .withUserId(user.id)
        .withSubject("User signed in")
        .withTemplate("UserAuthenticated")
        .withContext({
            firstName: user.firstName
        })
        .save();
        let responseBodyResult = new HTTPResponseBodyResult(HTTPSuccessMessage.RECORD_CREATED, HTTPSuccessType, HTTPSuccessStatus.OK, req.originalUrl);
        let responseBody = new HTTPResponseBody({userRefreshToken: userRefreshToken, userAccessToken: userAccessToken}, responseBodyResult);
        res.status(200).json(responseBody);
    } catch (error) {
        next(error as HTTPError);
    }
}

export const refreshUserToken = async (req: Request, res: Response, next:NextFunction) => {
    try {
        let record;
        const tokenSecret: Secret = process.env.TOKEN_SECRET as Secret;
        if (req.body.middlewareData.token.tokenType === "USER_REFRESH_TOKEN") {
            record = await prisma.userAccessToken.create({
                data: {
                    userId: req.body.middlewareData.token.userId,
                    token: jwt.sign({userId: req.body.middlewareData.token.userId, tokenType: "USER_ACCESS_TOKEN"}, tokenSecret, {expiresIn: '1d'}),
                    expiresAt: new Date(Date.now() + 600000),
                    userRefreshTokenId: req.body.middlewareData.token.id
                },
            });
        } else {
            throw new BadRequestError("Invalid token type");
        }
        let responseBodyResult = new HTTPResponseBodyResult(HTTPSuccessMessage.RECORD_CREATED, HTTPSuccessType, HTTPSuccessStatus.OK, req.originalUrl);
        let responseBody = new HTTPResponseBody(record, responseBodyResult);
        res.status(200).json(responseBody);
    } catch (error) {
        next(error as HTTPError);
    }
}

export const findUserToken = async (req: Request, res: Response, next:NextFunction) => {
    try {
        let record;
        if(req.body.middlewareData.token.tokenType === "USER_ACCESS_TOKEN") {
            record = await prisma.userAccessToken.findUnique({
                where: {
                token: req.body.middlewareData.token.token,
                },
            });
        } else if (req.body.middlewareData.token.tokenType === "USER_REFRESH_TOKEN") {
            record = await prisma.userRefreshToken.findUnique({
                where: {
                token: req.body.middlewareData.token.token,
                },
            });
        } else {
            throw new BadRequestError("Invalid token type");
        }
        let responseBodyResult = new HTTPResponseBodyResult(HTTPSuccessMessage.RECORD_CHECKED, HTTPSuccessType, HTTPSuccessStatus.OK, req.originalUrl);
        let responseBody = new HTTPResponseBody(record, responseBodyResult);
        res.status(200).json(responseBody);
    } catch (error) {
        next(error as HTTPError);
    }
}

export const deactivateUserToken = async (req: Request, res: Response, next:NextFunction) => {
    try {
        let record;
        if (req.body.middlewareData.token.tokenType === "USER_ACCESS_TOKEN") {
            record = await prisma.userAccessToken.update({
                where: { id: req.body.middlewareData.token.id },
                data: { active: false },
            });
        } else if (req.body.middlewareData.token.tokenType === "USER_REFRESH_TOKEN") {
            record = await prisma.userRefreshToken.update({
                where: { id: req.body.middlewareData.token.id },
                data: { active: false },
            });
        } else {
            throw new BadRequestError("Invalid token type");
        }
        let responseBodyResult = new HTTPResponseBodyResult(HTTPSuccessMessage.RECORD_DEACTIVATED, HTTPSuccessType, HTTPSuccessStatus.OK, req.originalUrl);
        let responseBody = new HTTPResponseBody(record, responseBodyResult);
        res.status(200).json(responseBody);
    } catch (error) {
        next(error as HTTPError);
    }
}