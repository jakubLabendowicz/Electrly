import express, { Request, Response, NextFunction, Router } from 'express';
import { Prisma, PrismaClient } from '@prisma/client';
import { HTTPResponseBody, HTTPResponseBodyResult } from '../types/HTTPResponse';
import { HTTPSuccessType, HTTPSuccessMessage, HTTPSuccessStatus } from '../types/HTTPSuccess';
import { HTTPErrorType, HTTPErrorMessage, HTTPErrorStatus, HTTPError, BadRequestError, UnauthorizedError, ForbiddenError, NotFoundError, ConflictError, InternalServerError } from '../types/HTTPError';
import { processUserPasswordCode } from '../utils/UserPasswordCodeUtils';
import dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient();

export const createUserPasswordCode = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
              email: req.body.data.email,
            },
          });
        if (!user) {
            throw new NotFoundError("User not found");
        }
        if (user.active === false) {
            throw new UnauthorizedError("User already deactivated");
        }
        const record = await processUserPasswordCode(user);
        let responseBodyResult = new HTTPResponseBodyResult(HTTPSuccessMessage.RECORD_CREATED, HTTPSuccessType, HTTPSuccessStatus.CREATED, req.originalUrl);
        let responseBody = new HTTPResponseBody({
            id: record.id,
            createdAt: record.createdAt,
            updatedAt: record.updatedAt,
            userId: record.userId,
            expiresAt: record.expiresAt
        }, responseBodyResult);
        res.status(200).json(responseBody);
    } catch (error) {
        next(error as HTTPError);
    }
}

export const findUserPasswordCode = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const userPasswordCodeFoundCheck = await prisma.userPasswordCode.findUnique({
            where: {
              id: req.params.id
            },
        });
        if (!userPasswordCodeFoundCheck) {
            throw new NotFoundError("User password code not found");
        }
        const record = await prisma.userPasswordCode.findUnique({
            where: {
              id: req.params.id,
              ...req.body.middlewareData.permissionsConditions
            }
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

export const findUserPasswordCodes = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const userPasswordCodeFoundCheck = await prisma.userPasswordCode.findMany();
        if (userPasswordCodeFoundCheck.length === 0) {
            throw new NotFoundError("User password code not found");
        }
        const records = await prisma.userPasswordCode.findMany(
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

export const updateUserPasswordCode = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const userPasswordCodeFoundCheck = await prisma.userPasswordCode.findUnique({
            where: {
              id: req.params.id
            },
        });
        if (!userPasswordCodeFoundCheck) {
            throw new NotFoundError("User password code not found");
        }
        const userPasswordCode = await prisma.userPasswordCode.findUnique({
            where: {
              id: req.params.id,
              ...req.body.middlewareData.permissionsConditions
            },
        });
        if (!userPasswordCode) {
            throw new ForbiddenError();
        }
        const record = await prisma.userPasswordCode.update({
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

export const deleteUserPasswordCode = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const userPasswordCodeFoundCheck = await prisma.userPasswordCode.findUnique({
            where: {
              id: req.params.id
            },
        });
        if (!userPasswordCodeFoundCheck) {
            throw new NotFoundError("User password code not found");
        }
        const userPasswordCode = await prisma.userPasswordCode.findUnique({
            where: {
              id: req.params.id,
              ...req.body.middlewareData.permissionsConditions
            },
        });
        if (!userPasswordCode) {
            throw new ForbiddenError();
        }
        const record = await prisma.userPasswordCode.delete({
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