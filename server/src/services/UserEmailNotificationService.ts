import express, { Request, Response, NextFunction, Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { HTTPResponseBody, HTTPResponseBodyResult } from '../types/HTTPResponse';
import { HTTPSuccessType, HTTPSuccessMessage, HTTPSuccessStatus } from '../types/HTTPSuccess';
import { HTTPErrorType, HTTPErrorMessage, HTTPErrorStatus, HTTPError, BadRequestError, UnauthorizedError, ForbiddenError, NotFoundError, ConflictError, InternalServerError } from '../types/HTTPError';
const prisma = new PrismaClient();

export const createUserEmailNotification = async (req: Request, res: Response, next:NextFunction) => {
    try {
        if(req.body.middlewareData.permissionsConditions && req.body.data.userId !== req.body.middlewareData.permissionsConditions.userId) {
            throw new ForbiddenError();
        }
        const record = await prisma.userEmailNotification.create({
            data: { ...req.body.data},
        });
        let responseBodyResult = new HTTPResponseBodyResult(HTTPSuccessMessage.RECORD_CREATED, HTTPSuccessType, HTTPSuccessStatus.CREATED, req.originalUrl);
        let responseBody = new HTTPResponseBody(record, responseBodyResult);
        res.status(200).json(responseBody);
    } catch (error) {
        next(error as HTTPError);
    }
};

export const findUserEmailNotification = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const userEmailNotificationFoundCheck = await prisma.userEmailNotification.findUnique({
            where: {
              id: req.params.id
            },
        });
        if (!userEmailNotificationFoundCheck) {
            throw new NotFoundError("User email notification not found");
        }
        const record = await prisma.userEmailNotification.findUnique({
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

export const findUserEmailNotifications = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const userEmailNotificationFoundCheck = await prisma.userEmailNotification.findMany();
        if (userEmailNotificationFoundCheck.length === 0) {
            throw new NotFoundError("User email notification not found");
        }
        const records = await prisma.userEmailNotification.findMany(
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

export const updateUserEmailNotification = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const userEmailNotificationFoundCheck = await prisma.userEmailNotification.findUnique({
            where: {
              id: req.params.id
            },
        });
        if (!userEmailNotificationFoundCheck) {
            throw new NotFoundError("User email notification not found");
        }
        const userEmailNotification = await prisma.userEmailNotification.findUnique({
            where: {
              id: req.params.id,
              ...req.body.middlewareData.permissionsConditions
            },
        });
        if (!userEmailNotification) {
            throw new ForbiddenError();
        }
        const record = await prisma.userEmailNotification.update({
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

export const deleteUserEmailNotification = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const userEmailNotificationFoundCheck = await prisma.userEmailNotification.findUnique({
            where: {
              id: req.params.id
            },
        });
        if (!userEmailNotificationFoundCheck) {
            throw new NotFoundError("User email notification not found");
        }
        const userEmailNotification = await prisma.userEmailNotification.findUnique({
            where: {
              id: req.params.id,
              ...req.body.middlewareData.permissionsConditions
            },
        });
        if (!userEmailNotification) {
            throw new ForbiddenError();
        }
        const record = await prisma.userEmailNotification.delete({
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