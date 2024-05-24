import express, { Request, Response, NextFunction, Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { HTTPResponseBody, HTTPResponseBodyResult } from '../types/HTTPResponse';
import { HTTPSuccessType, HTTPSuccessMessage, HTTPSuccessStatus } from '../types/HTTPSuccess';
import { HTTPErrorType, HTTPErrorMessage, HTTPErrorStatus, HTTPError, BadRequestError, UnauthorizedError, ForbiddenError, NotFoundError, ConflictError, InternalServerError } from '../types/HTTPError';
const prisma = new PrismaClient();

export const createClientScope = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const clientScope = await prisma.clientScope.findFirst({
            where: {
                clientId: req.body.data.clientId,
                scopeId: req.body.data.scopeId,
                active: true
            },
          });
        if (clientScope) {
            throw new ConflictError("Client scope already exists");
        }
        const record = await prisma.clientScope.create({
            data: { ...req.body.data},
        });
        let responseBodyResult = new HTTPResponseBodyResult(HTTPSuccessMessage.RECORD_CREATED, HTTPSuccessType, HTTPSuccessStatus.CREATED, req.originalUrl);
        let responseBody = new HTTPResponseBody(record, responseBodyResult);
        res.status(201).json(responseBody);
    } catch (error) {
        next(error as HTTPError);
    }
};

export const findClientScope = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const record = await prisma.clientScope.findUnique({
            where: {
              id: req.params.id,
            },
          });
        if (!record) {
            throw new NotFoundError("Client scope not found");
        }
        let responseBodyResult = new HTTPResponseBodyResult(HTTPSuccessMessage.RECORD_FOUND, HTTPSuccessType, HTTPSuccessStatus.OK, req.originalUrl);
        let responseBody = new HTTPResponseBody(record, responseBodyResult);
        res.status(200).json(responseBody);
    } catch (error) {
        next(error as HTTPError);
    }
}

export const findClientScopes = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const records = await prisma.clientScope.findMany();
        if (records.length === 0) {
            throw new NotFoundError("Client scope not found");
        }
        let responseBodyResult = new HTTPResponseBodyResult(HTTPSuccessMessage.RECORDS_FOUND, HTTPSuccessType, HTTPSuccessStatus.OK, req.originalUrl);
        let responseBody = new HTTPResponseBody(records, responseBodyResult);
        res.status(200).json(responseBody);
    } catch (error) {
        next(error as HTTPError);
    }
}

export const updateClientScope = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const clientScope = await prisma.clientScope.findUnique({
            where: {
              id: req.params.id,
            },
        });
        if (!clientScope) {
            throw new NotFoundError("Client scope not found");
        }
        const record = await prisma.clientScope.update({
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

export const deleteClientScope = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const clientScope = await prisma.clientScope.findUnique({
            where: {
              id: req.params.id,
            },
        });
        if (!clientScope) {
            throw new NotFoundError("Client scope not found");
        }
        const record = await prisma.clientScope.delete({
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