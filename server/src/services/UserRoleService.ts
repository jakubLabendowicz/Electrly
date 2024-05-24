import express, { Request, Response, NextFunction, Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { HTTPResponseBody, HTTPResponseBodyResult } from '../types/HTTPResponse';
import { HTTPSuccessType, HTTPSuccessMessage, HTTPSuccessStatus } from '../types/HTTPSuccess';
import { HTTPErrorType, HTTPErrorMessage, HTTPErrorStatus, HTTPError, BadRequestError, UnauthorizedError, ForbiddenError, NotFoundError, ConflictError, InternalServerError } from '../types/HTTPError';
const prisma = new PrismaClient();

export const createUserRole = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const userRole = await prisma.userRole.findFirst({
            where: {
                userId: req.body.data.userId,
                roleId: req.body.data.roleId,
                active: true
            },
          });
        if (userRole) {
            throw new ConflictError("User role already exists");
        }
        if(req.body.middlewareData.permissionsConditions && (userRole as any).userId !== req.body.middlewareData.permissionsConditions.userId) {
            throw new ForbiddenError();
        }
        const record = await prisma.userRole.create({
            data: { ...req.body.data},
        });
        let responseBodyResult = new HTTPResponseBodyResult(HTTPSuccessMessage.RECORD_CREATED, HTTPSuccessType, HTTPSuccessStatus.CREATED, req.originalUrl);
        let responseBody = new HTTPResponseBody(record, responseBodyResult);
        res.status(200).json(responseBody);
    } catch (error) {
        next(error as HTTPError);
    }
};

export const findUserRole = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const userRoleFoundCheck = await prisma.userRole.findUnique({
            where: {
              id: req.params.id
            },
        });
        if (!userRoleFoundCheck) {
            throw new NotFoundError("User role not found");
        }
        const record = await prisma.userRole.findUnique({
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

export const findUserRoles = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const userRoleFoundCheck = await prisma.userRole.findMany();
        if (userRoleFoundCheck.length === 0) {
            throw new NotFoundError("User roles not found");
        }
        const records = await prisma.userRole.findMany(
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

export const updateUserRole = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const userRoleFoundCheck = await prisma.userRole.findUnique({
            where: {
              id: req.params.id
            },
        });
        if (!userRoleFoundCheck) {
            throw new NotFoundError("User role not found");
        }
        const userRole = await prisma.userRole.findUnique({
            where: {
              id: req.params.id,
              ...req.body.middlewareData.permissionsConditions
            },
        });
        if (!userRole) {
            throw new ForbiddenError();
        }
        const record = await prisma.userRole.update({
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

export const deleteUserRole = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const userRoleFoundCheck = await prisma.userRole.findUnique({
            where: {
              id: req.params.id
            },
        });
        if (!userRoleFoundCheck) {
            throw new NotFoundError("User role not found");
        }
        const userRole = await prisma.userRole.findUnique({
            where: {
              id: req.params.id,
              ...req.body.middlewareData.permissionsConditions
            },
        });
        if (!userRole) {
            throw new ForbiddenError();
        }
        const record = await prisma.userRole.delete({
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