import express, { Request, Response, NextFunction, Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { HTTPResponseBody, HTTPResponseBodyResult } from '../types/HTTPResponse';
import { HTTPSuccessType, HTTPSuccessMessage, HTTPSuccessStatus } from '../types/HTTPSuccess';
import { HTTPErrorType, HTTPErrorMessage, HTTPErrorStatus, HTTPError, BadRequestError, UnauthorizedError, ForbiddenError, NotFoundError, ConflictError, InternalServerError } from '../types/HTTPError';
const prisma = new PrismaClient();

export const createClientAllowedScope = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const clientAllowedScope = await prisma.clientAllowedScope.findFirst({
            where: {
                userId: req.body.data.userId,
                clientId: req.body.data.clientId,
                scopeId: req.body.data.scopeId,
                active: true
            },
          });
        if (clientAllowedScope) {
            throw new ConflictError("Client allowed scope already exists");
        }
        if(req.body.middlewareData.permissionsConditions && (clientAllowedScope as any).userId !== req.body.middlewareData.permissionsConditions.userId) {
            throw new ForbiddenError();
        }
        const record = await prisma.clientAllowedScope.create({
            data: { ...req.body.data},
        });
        let responseBodyResult = new HTTPResponseBodyResult(HTTPSuccessMessage.RECORD_CREATED, HTTPSuccessType, HTTPSuccessStatus.CREATED, req.originalUrl);
        let responseBody = new HTTPResponseBody(record, responseBodyResult);
        res.status(200).json(responseBody);
    } catch (error) {
        next(error as HTTPError);
    }
};

export const findClientAllowedScope = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const clientAllowedScopeFoundCheck = await prisma.clientAllowedScope.findUnique({
            where: {
              id: req.params.id
            },
        });
        if (!clientAllowedScopeFoundCheck) {
            throw new NotFoundError("Client allowed scope not found");
        }
        const record = await prisma.clientAllowedScope.findUnique({
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

export const findClientAllowedScopes = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const clientAllowedScopeFoundCheck = await prisma.clientAllowedScope.findMany();
        if (clientAllowedScopeFoundCheck.length === 0) {
            throw new NotFoundError("Client allowed scopes not found");
        }
        const records = await prisma.clientAllowedScope.findMany(
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

export const updateClientAllowedScope = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const clientAllowedScopeFoundCheck = await prisma.clientAllowedScope.findUnique({
            where: {
              id: req.params.id
            },
        });
        if (!clientAllowedScopeFoundCheck) {
            throw new NotFoundError("Client allowed scope not found");
        }
        const clientAllowedScope = await prisma.clientAllowedScope.findUnique({
            where: {
              id: req.params.id,
              ...req.body.middlewareData.permissionsConditions
            },
        });
        if (!clientAllowedScope) {
            throw new ForbiddenError();
        }
        const record = await prisma.clientAllowedScope.update({
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

export const deleteClientAllowedScope = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const clientAllowedScopeFoundCheck = await prisma.clientAllowedScope.findUnique({
            where: {
              id: req.params.id
            },
        });
        if (!clientAllowedScopeFoundCheck) {
            throw new NotFoundError("Client allowed scope not found");
        }
        const clientAllowedScope = await prisma.clientAllowedScope.findUnique({
            where: {
              id: req.params.id,
              ...req.body.middlewareData.permissionsConditions
            },
        });
        if (!clientAllowedScope) {
            throw new ForbiddenError();
        }
        const record = await prisma.clientAllowedScope.delete({
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