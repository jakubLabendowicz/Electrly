import express, { Request, Response, NextFunction, Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { HTTPResponseBody, HTTPResponseBodyResult } from '../types/HTTPResponse';
import { HTTPSuccessType, HTTPSuccessMessage, HTTPSuccessStatus } from '../types/HTTPSuccess';
import { HTTPErrorType, HTTPErrorMessage, HTTPErrorStatus, HTTPError, BadRequestError, UnauthorizedError, ForbiddenError, NotFoundError, ConflictError, InternalServerError } from '../types/HTTPError';
import { UserEmailNotificationBuilder } from '../builders/UserEmailNotificationBuilder';
const bcrypt = require("bcrypt");
const prisma = new PrismaClient();

export const createUserPassword = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const userPasswordCode = await prisma.userPasswordCode.findUnique({
            where: {
              code: req.body.data.code,
            },
            include: {
                user: true
            }
          });
        if (!userPasswordCode) {
            throw new UnauthorizedError("Code not found");
        }
        if (userPasswordCode.active === false) {
            throw new UnauthorizedError("Code already deactivated");
        }
        if (userPasswordCode.expiresAt < new Date()) {
            throw new UnauthorizedError("Code expired");
        }

        const salt:string = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword:string = await bcrypt.hash(req.body.data.password, salt);

        const record = await prisma.userPassword.create({
            data: {
                userId: userPasswordCode.userId,
                passwordHash: hashPassword,
                userPasswordCodeId: userPasswordCode.id
            },
        });
        new UserEmailNotificationBuilder()
        .withUserId(userPasswordCode.user.id)
        .withSubject("Password created")
        .withTemplate("UserPasswordCreated")
        .withContext({
            firstName: userPasswordCode.user.firstName
        })
        .send();
        let responseBodyResult = new HTTPResponseBodyResult(HTTPSuccessMessage.RECORD_CREATED, HTTPSuccessType, HTTPSuccessStatus.CREATED, req.originalUrl);
        let responseBody = new HTTPResponseBody(record, responseBodyResult);
        res.status(200).json(responseBody);
    } catch (error) {
        next(error as HTTPError);
    }
}

export const findUserPassword = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const userPasswordFoundCheck = await prisma.userPassword.findUnique({
            where: {
              id: req.params.id
            },
        });
        if (!userPasswordFoundCheck) {
            throw new NotFoundError("User password not found");
        }
        const record = await prisma.userPassword.findUnique({
            where: {
              id: req.params.id,
              ...req.body.middlewareData.permissionsConditions
            },
          });
        if (!record) {
            throw new ForbiddenError();
        }
        let responseBodyResult = new HTTPResponseBodyResult(HTTPSuccessMessage.RECORD_FOUND, HTTPSuccessType, HTTPSuccessStatus.OK, req.originalUrl);
        let responseBody = new HTTPResponseBody(record, responseBodyResult);
        res.status(200).json(responseBody);
    } catch (error) {
        next(error as HTTPError);
    }
}

export const findUserPasswords = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const userPasswordFoundCheck = await prisma.userPassword.findMany();
        if (userPasswordFoundCheck.length === 0) {
            throw new NotFoundError("User password not found");
        }
        const records = await prisma.userPassword.findMany(
            {
                where: {
                    ...req.body.middlewareData.permissionsConditions
                }
            }
        );
        if (records.length === 0) {
            throw new ForbiddenError();
        }
        let responseBodyResult = new HTTPResponseBodyResult(HTTPSuccessMessage.RECORDS_FOUND, HTTPSuccessType, HTTPSuccessStatus.OK, req.originalUrl);
        let responseBody = new HTTPResponseBody(records, responseBodyResult);
        res.status(200).json(responseBody);
    } catch (error) {
        next(error as HTTPError);
    }
}

export const updateUserPassword = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const userPasswordFoundCheck = await prisma.userPassword.findUnique({
            where: {
              id: req.params.id
            },
        });
        if (!userPasswordFoundCheck) {
            throw new NotFoundError("User password not found");
        }
        const userPassword = await prisma.userPassword.findUnique({
            where: {
              id: req.params.id,
              ...req.body.middlewareData.permissionsConditions
            },
        });
        if (!userPassword) {
            throw new ForbiddenError();
        }
        const record = await prisma.userPassword.update({
            where: {
              id: req.params.id,
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

export const deleteUserPassword = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const userPasswordFoundCheck = await prisma.userPassword.findUnique({
            where: {
              id: req.params.id
            },
        });
        if (!userPasswordFoundCheck) {
            throw new NotFoundError("User password not found");
        }
        const userPassword = await prisma.userPassword.findUnique({
            where: {
              id: req.params.id,
              ...req.body.middlewareData.permissionsConditions
            },
        });
        if (!userPassword) {
            throw new ForbiddenError();
        }
        const record = await prisma.userPassword.delete({
            where: {
              id: req.params.id,
            },
          });
        let responseBodyResult = new HTTPResponseBodyResult(HTTPSuccessMessage.RECORD_DELETED, HTTPSuccessType, HTTPSuccessStatus.OK, req.originalUrl);
        let responseBody = new HTTPResponseBody(record, responseBodyResult);
        res.status(200).json(responseBody);
    } catch (error) {
        next(error as HTTPError);
    }
}