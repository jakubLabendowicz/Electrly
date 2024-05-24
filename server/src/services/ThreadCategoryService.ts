import express, { Request, Response, NextFunction, Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { HTTPResponseBody, HTTPResponseBodyResult } from '../types/HTTPResponse';
import { HTTPSuccessType, HTTPSuccessMessage, HTTPSuccessStatus } from '../types/HTTPSuccess';
import { HTTPErrorType, HTTPErrorMessage, HTTPErrorStatus, HTTPError, BadRequestError, UnauthorizedError, ForbiddenError, NotFoundError, ConflictError, InternalServerError } from '../types/HTTPError';
const prisma = new PrismaClient();

export const createThreadCategory = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const threadCategory = await prisma.threadCategory.findUnique({
            where: {
              name: req.body.data.name,
              active: true
            },
          });
        if (threadCategory) {
            throw new ConflictError("ThreadCategory already exists");
        }
        const record = await prisma.threadCategory.create({
            data: { ...req.body.data},
        });
        let responseBodyResult = new HTTPResponseBodyResult(HTTPSuccessMessage.RECORD_CREATED, HTTPSuccessType, HTTPSuccessStatus.CREATED, req.originalUrl);
        let responseBody = new HTTPResponseBody(record, responseBodyResult);
        res.status(200).json(responseBody);
    } catch (error) {
        next(error as HTTPError);
    }
};

export const findThreadCategory = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const record = await prisma.threadCategory.findUnique({
            where: {
              id: req.params.id,
            },
            include: {
                threads: {
                    include: {
                        user: true,
                        threadReactions: true
                    }
                }
            }
          });
        if (!record) {
            throw new NotFoundError("ThreadCategory not found");
        }
        let responseBodyResult = new HTTPResponseBodyResult(HTTPSuccessMessage.RECORD_FOUND, HTTPSuccessType, HTTPSuccessStatus.OK, req.originalUrl);
        let responseBody = new HTTPResponseBody(record, responseBodyResult);
        res.status(200).json(responseBody);
    } catch (error) {
        next(error as HTTPError);
    }
}

export const findThreadCategories = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const records = await prisma.threadCategory.findMany();
        if (records.length === 0) {
            throw new NotFoundError("ThreadCategory not found");
        }
        let responseBodyResult = new HTTPResponseBodyResult(HTTPSuccessMessage.RECORDS_FOUND, HTTPSuccessType, HTTPSuccessStatus.OK, req.originalUrl);
        let responseBody = new HTTPResponseBody(records, responseBodyResult);
        res.status(200).json(responseBody);
    } catch (error) {
        next(error as HTTPError);
    }
}

export const updateThreadCategory = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const threadCategory = await prisma.threadCategory.findUnique({
            where: {
              id: req.params.id,
            },
        });
        if (!threadCategory) {
            throw new NotFoundError("ThreadCategory not found");
        }
        const record = await prisma.threadCategory.update({
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

export const deleteThreadCategory = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const threadCategory = await prisma.threadCategory.findUnique({
            where: {
              id: req.params.id,
            },
        });
        if (!threadCategory) {
            throw new NotFoundError("ThreadCategory not found");
        }
        const record = await prisma.threadCategory.delete({
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