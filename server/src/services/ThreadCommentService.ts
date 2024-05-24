import express, { Request, Response, NextFunction, Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { HTTPResponseBody, HTTPResponseBodyResult } from '../types/HTTPResponse';
import { HTTPSuccessType, HTTPSuccessMessage, HTTPSuccessStatus } from '../types/HTTPSuccess';
import { HTTPErrorType, HTTPErrorMessage, HTTPErrorStatus, HTTPError, BadRequestError, UnauthorizedError, ForbiddenError, NotFoundError, ConflictError, InternalServerError } from '../types/HTTPError';
const prisma = new PrismaClient();

export const createThreadComment = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const record = await prisma.threadComment.create({
            data: { ...req.body.data},
        });
        let responseBodyResult = new HTTPResponseBodyResult(HTTPSuccessMessage.RECORD_CREATED, HTTPSuccessType, HTTPSuccessStatus.CREATED, req.originalUrl);
        let responseBody = new HTTPResponseBody(record, responseBodyResult);
        res.status(200).json(responseBody);
    } catch (error) {
        next(error as HTTPError);
    }
};

export const findThreadComment = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const record = await prisma.threadComment.findUnique({
            where: {
              id: req.params.id,
            },
          });
        if (!record) {
            throw new NotFoundError("ThreadComment not found");
        }
        let responseBodyResult = new HTTPResponseBodyResult(HTTPSuccessMessage.RECORD_FOUND, HTTPSuccessType, HTTPSuccessStatus.OK, req.originalUrl);
        let responseBody = new HTTPResponseBody(record, responseBodyResult);
        res.status(200).json(responseBody);
    } catch (error) {
        next(error as HTTPError);
    }
}

export const findThreadComments = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const records = await prisma.threadComment.findMany();
        if (records.length === 0) {
            throw new NotFoundError("ThreadComment not found");
        }
        let responseBodyResult = new HTTPResponseBodyResult(HTTPSuccessMessage.RECORDS_FOUND, HTTPSuccessType, HTTPSuccessStatus.OK, req.originalUrl);
        let responseBody = new HTTPResponseBody(records, responseBodyResult);
        res.status(200).json(responseBody);
    } catch (error) {
        next(error as HTTPError);
    }
}

export const updateThreadComment = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const threadComment = await prisma.threadComment.findUnique({
            where: {
              id: req.params.id,
            },
        });
        if (!threadComment) {
            throw new NotFoundError("ThreadComment not found");
        }
        const record = await prisma.threadComment.update({
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

export const deleteThreadComment = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const threadComment = await prisma.threadComment.findUnique({
            where: {
              id: req.params.id,
            },
        });
        if (!threadComment) {
            throw new NotFoundError("ThreadComment not found");
        }
        const record = await prisma.threadComment.delete({
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