import express, { Request, Response, NextFunction, Router } from 'express';
import { Prisma, PrismaClient } from '@prisma/client';
import { HTTPResponseBody, HTTPResponseBodyResult } from '../types/HTTPResponse';
import { HTTPSuccessType, HTTPSuccessMessage, HTTPSuccessStatus } from '../types/HTTPSuccess';
import { HTTPErrorType, HTTPErrorMessage, HTTPErrorStatus, HTTPError, BadRequestError, UnauthorizedError, ForbiddenError, NotFoundError, ConflictError, InternalServerError } from '../types/HTTPError';
import { processUserDeactivationCode } from '../utils/UserDeactivationCodeUtils';

const prisma = new PrismaClient();

export const createUserDeactivationCode = async (req: Request, res: Response, next:NextFunction) => {
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
        if(req.body.middlewareData.permissionsConditions && user.id !== req.body.middlewareData.permissionsConditions.userId) {
            throw new ForbiddenError();
        }
        const record = await processUserDeactivationCode(user);
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

export const findUserDeactivationCode = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const userDeactivationCodeFindCheck = await prisma.userDeactivationCode.findUnique({
            where: {
              id: req.params.id
            },
        });
        if (!userDeactivationCodeFindCheck) {
            throw new NotFoundError("User deactivation code not found");
        }
        const record = await prisma.userDeactivationCode.findUnique({
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

export const findUserDeactivationCodes = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const userDeactivationCodeFindCheck = await prisma.userDeactivationCode.findMany();
        if (userDeactivationCodeFindCheck.length === 0) {
            throw new NotFoundError("User deactivation code not found");
        }
        const records = await prisma.userDeactivationCode.findMany(
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

export const updateUserDeactivationCode = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const userDeactivationCodeFindCheck = await prisma.userDeactivationCode.findUnique({
            where: {
              id: req.params.id
            },
        });
        if (!userDeactivationCodeFindCheck) {
            throw new NotFoundError("User deactivation code not found");
        }
        const userDeactivationCode = await prisma.userDeactivationCode.findUnique({
            where: {
              id: req.params.id,
              ...req.body.middlewareData.permissionsConditions
            },
        });
        if (!userDeactivationCode) {
            throw new ForbiddenError();
        }
        const record = await prisma.userDeactivationCode.update({
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

export const deleteUserDeactivationCode = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const userDeactivationCodeFindCheck = await prisma.userDeactivationCode.findUnique({
            where: {
              id: req.params.id
            },
        });
        if (!userDeactivationCodeFindCheck) {
            throw new NotFoundError("User deactivation code not found");
        }
        const userDeactivationCode = await prisma.userDeactivationCode.findUnique({
            where: {
              id: req.params.id,
              ...req.body.middlewareData.permissionsConditions
            },
        });
        if (!userDeactivationCode) {
            throw new ForbiddenError();
        }
        const record = await prisma.userDeactivationCode.delete({
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