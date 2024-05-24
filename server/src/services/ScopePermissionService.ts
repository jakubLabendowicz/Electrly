import express, { Request, Response, NextFunction, Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { HTTPResponseBody, HTTPResponseBodyResult } from '../types/HTTPResponse';
import { HTTPSuccessType, HTTPSuccessMessage, HTTPSuccessStatus } from '../types/HTTPSuccess';
import { HTTPErrorType, HTTPErrorMessage, HTTPErrorStatus, HTTPError, BadRequestError, UnauthorizedError, ForbiddenError, NotFoundError, ConflictError, InternalServerError } from '../types/HTTPError';
const prisma = new PrismaClient();

export const createScopePermission = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const scopePermission = await prisma.scopePermission.findFirst({
            where: {
                scopeId: req.body.data.scopeId,
                permissionId: req.body.data.permissionId,
                active: true
            },
          });
        if (scopePermission) {
            throw new ConflictError("Scope permission already exists");
        }
        const record = await prisma.scopePermission.create({
            data: { ...req.body.data},
        });
        let responseBodyResult = new HTTPResponseBodyResult(HTTPSuccessMessage.RECORD_CREATED, HTTPSuccessType, HTTPSuccessStatus.CREATED, req.originalUrl)
        let responseBody = new HTTPResponseBody(record, responseBodyResult);
        res.status(200).json(responseBody);
    } catch (error) {
        next(error as HTTPError);
    }
};

export const findScopePermission = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const record = await prisma.scopePermission.findUnique({
            where: {
              id: req.params.id,
            },
          });
        if (!record) {
            throw new NotFoundError("Scope permission not found");
        }
        let responseBodyResult = new HTTPResponseBodyResult(HTTPSuccessMessage.RECORD_FOUND, HTTPSuccessType, HTTPSuccessStatus.OK, req.originalUrl)
        let responseBody = new HTTPResponseBody(record, responseBodyResult);
        res.status(200).json(responseBody);
    } catch (error) {
        next(error as HTTPError);
    }
}

export const findScopePermissions = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const records = await prisma.scopePermission.findMany();
        if (records.length === 0) {
            throw new NotFoundError("Scope permission not found");
        }
        let responseBodyResult = new HTTPResponseBodyResult(HTTPSuccessMessage.RECORDS_FOUND, HTTPSuccessType, HTTPSuccessStatus.OK, req.originalUrl)
        let responseBody = new HTTPResponseBody(records, responseBodyResult);
        res.status(200).json(responseBody);
    } catch (error) {
        next(error as HTTPError);
    }
}

export const updateScopePermission = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const scopePermission = await prisma.scopePermission.findUnique({
            where: {
              id: req.params.id,
            },
        });
        if (!scopePermission) {
            throw new NotFoundError("Scope permission not found");
        }
        const record = await prisma.scopePermission.update({
            where: {
              id: req.params.id,
            },
            data: { ...req.body.data },
        });
        let responseBodyResult = new HTTPResponseBodyResult(HTTPSuccessMessage.RECORD_UPDATED, HTTPSuccessType, HTTPSuccessStatus.OK, req.originalUrl)
        let responseBody = new HTTPResponseBody(record, responseBodyResult);
        res.status(200).json(responseBody);
    } catch (error) {
        next(error as HTTPError);
    }
}

export const deleteScopePermission = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const scopePermission = await prisma.scopePermission.findUnique({
            where: {
              id: req.params.id,
            },
        });
        if (!scopePermission) {
            throw new NotFoundError("Scope permission not found");
        }
        const record = await prisma.scopePermission.delete({
            where: {
              id: req.params.id,
            },
          });
        let responseBodyResult = new HTTPResponseBodyResult(HTTPSuccessMessage.RECORD_DELETED, HTTPSuccessType, HTTPSuccessStatus.OK, req.originalUrl)
        let responseBody = new HTTPResponseBody(record, responseBodyResult);
        res.status(200).json(responseBody);
    } catch (error) {
        next(error as HTTPError);
    }
}