import express, { Request, Response, NextFunction, Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { HTTPResponseBody, HTTPResponseBodyResult } from '../types/HTTPResponse';
import { HTTPSuccessType, HTTPSuccessMessage, HTTPSuccessStatus } from '../types/HTTPSuccess';
import { HTTPErrorType, HTTPErrorMessage, HTTPErrorStatus, HTTPError, BadRequestError, UnauthorizedError, ForbiddenError, NotFoundError, ConflictError, InternalServerError } from '../types/HTTPError';
const prisma = new PrismaClient();

export const createScope = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const scope = await prisma.scope.findUnique({
            where: {
              name: req.body.data.name,
              active: true
            },
          });
        if (scope) {
            throw new ConflictError("Scope already exists");
        }
        const record = await prisma.scope.create({
            data: { ...req.body.data},
        });
        let responseBodyResult = new HTTPResponseBodyResult(HTTPSuccessMessage.RECORD_CREATED, HTTPSuccessType, HTTPSuccessStatus.CREATED, req.originalUrl);
        let responseBody = new HTTPResponseBody(record, responseBodyResult);
        res.status(200).json(responseBody);
    } catch (error) {
        next(error as HTTPError);
    }
};

export const findScope = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const record = await prisma.scope.findUnique({
            where: {
              id: req.params.id,
            },
          });
        if (!record) {
            throw new NotFoundError("Scope not found");
        }
        let responseBodyResult = new HTTPResponseBodyResult(HTTPSuccessMessage.RECORD_FOUND, HTTPSuccessType, HTTPSuccessStatus.OK, req.originalUrl);
        let responseBody = new HTTPResponseBody(record, responseBodyResult);
        res.status(200).json(responseBody);
    } catch (error) {
        next(error as HTTPError);
    }
}

export const findScopes = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const records = await prisma.scope.findMany();
        if (records.length === 0) {
            throw new NotFoundError("Scope not found");
        }
        let responseBodyResult = new HTTPResponseBodyResult(HTTPSuccessMessage.RECORDS_FOUND, HTTPSuccessType, HTTPSuccessStatus.OK, req.originalUrl);
        let responseBody = new HTTPResponseBody(records, responseBodyResult);
        res.status(200).json(responseBody);
    } catch (error) {
        next(error as HTTPError);
    }
}

export const updateScope = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const scope = await prisma.scope.findUnique({
            where: {
              id: req.params.id,
            },
        });
        if (!scope) {
            throw new NotFoundError("Scope not found");
        }
        const record = await prisma.scope.update({
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

export const deleteScope = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const scope = await prisma.scope.findUnique({
            where: {
              id: req.params.id,
            },
        });
        if (!scope) {
            throw new NotFoundError("Scope not found");
        }
        const record = await prisma.scope.delete({
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