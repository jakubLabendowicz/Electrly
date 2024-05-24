import express, { Request, Response, NextFunction, Router } from 'express';
import { Prisma, PrismaClient } from '@prisma/client';
import { HTTPResponseBody, HTTPResponseBodyResult } from '../types/HTTPResponse';
import { HTTPSuccessType, HTTPSuccessMessage, HTTPSuccessStatus } from '../types/HTTPSuccess';
import { HTTPErrorType, HTTPErrorMessage, HTTPErrorStatus, HTTPError, BadRequestError, UnauthorizedError, ForbiddenError, NotFoundError, ConflictError, InternalServerError } from '../types/HTTPError';
import { processUserVerificationCode } from '../utils/UserVerificationCodeUtils';

const prisma = new PrismaClient();

export const createUserVerificationCode = async (req: Request, res: Response, next:NextFunction) => {
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
        if (user.emailVerified === true) {
            throw new ConflictError("User already verified");
        }
        if(req.body.middlewareData.permissionsConditions && user.id !== req.body.middlewareData.permissionsConditions.userId) {
            throw new ForbiddenError();
        }

        const record = await processUserVerificationCode(user);
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

export const findUserVerificationCode = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const userVerificationCodeFoundCheck = await prisma.userVerificationCode.findUnique({
            where: {
              id: req.params.id
            },
        });
        if (!userVerificationCodeFoundCheck) {
            throw new NotFoundError("User verification code not found");
        }
        const record = await prisma.userVerificationCode.findUnique({
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

export const findUserVerificationCodes = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const userVerificationCodeFoundCheck = await prisma.userVerificationCode.findMany();
        if (userVerificationCodeFoundCheck.length === 0) {
            throw new NotFoundError("User verification codes not found");
        }
        const records = await prisma.userVerificationCode.findMany(
            {
                where: {
                    ...req.body.middlewareData.permissionsConditions
                },
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

export const updateUserVerificationCode = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const userVerificationCodeFoundCheck = await prisma.userVerificationCode.findUnique({
            where: {
              id: req.params.id
            },
        });
        if (!userVerificationCodeFoundCheck) {
            throw new NotFoundError("User verification code not found");
        }
        const userVerificationCode = await prisma.userVerificationCode.findUnique({
            where: {
              id: req.params.id,
              ...req.body.middlewareData.permissionsConditions
            },
        });
        if (!userVerificationCode) {
            throw new ForbiddenError();
        }
        const record = await prisma.userVerificationCode.update({
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

export const deleteUserVerificationCode = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const userVerificationCodeFoundCheck = await prisma.userVerificationCode.findUnique({
            where: {
              id: req.params.id
            },
        });
        if (!userVerificationCodeFoundCheck) {
            throw new NotFoundError("User verification code not found");
        }
        const userVerificationCode = await prisma.userVerificationCode.findUnique({
            where: {
              id: req.params.id,
              ...req.body.middlewareData.permissionsConditions
            },
        });
        if (!userVerificationCode) {
            throw new ForbiddenError();
        }
        const record = await prisma.userVerificationCode.delete({
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