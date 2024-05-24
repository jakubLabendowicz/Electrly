import express, { Request, Response, NextFunction, Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { HTTPResponseBody, HTTPResponseBodyResult } from '../types/HTTPResponse';
import { HTTPSuccessType, HTTPSuccessMessage, HTTPSuccessStatus } from '../types/HTTPSuccess';
import { HTTPErrorType, HTTPErrorMessage, HTTPErrorStatus, HTTPError, BadRequestError, UnauthorizedError, ForbiddenError, NotFoundError, ConflictError, InternalServerError } from '../types/HTTPError';
const prisma = new PrismaClient();

export const createThreadReaction = async (req: Request, res: Response, next:NextFunction) => {
    try {
        // const threadReaction = await prisma.threadReaction.findUnique({
        //     where: {
        //       name: req.body.data.name,
        //       active: true
        //     },
        //   });
        // if (threadReaction) {
        //     throw new ConflictError("ThreadReaction already exists");
        // }
        const record = await prisma.threadReaction.create({
            data: { ...req.body.data},
        });
        let responseBodyResult = new HTTPResponseBodyResult(HTTPSuccessMessage.RECORD_CREATED, HTTPSuccessType, HTTPSuccessStatus.CREATED, req.originalUrl);
        let responseBody = new HTTPResponseBody(record, responseBodyResult);
        res.status(200).json(responseBody);
    } catch (error) {
        next(error as HTTPError);
    }
};

export const findThreadReaction = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const record = await prisma.threadReaction.findUnique({
            where: {
              id: req.params.id,
            },
          });
        if (!record) {
            throw new NotFoundError("ThreadReaction not found");
        }
        let responseBodyResult = new HTTPResponseBodyResult(HTTPSuccessMessage.RECORD_FOUND, HTTPSuccessType, HTTPSuccessStatus.OK, req.originalUrl);
        let responseBody = new HTTPResponseBody(record, responseBodyResult);
        res.status(200).json(responseBody);
    } catch (error) {
        next(error as HTTPError);
    }
}

export const findThreadReactions = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const records = await prisma.threadReaction.findMany();
        if (records.length === 0) {
            throw new NotFoundError("ThreadReaction not found");
        }
        let responseBodyResult = new HTTPResponseBodyResult(HTTPSuccessMessage.RECORDS_FOUND, HTTPSuccessType, HTTPSuccessStatus.OK, req.originalUrl);
        let responseBody = new HTTPResponseBody(records, responseBodyResult);
        res.status(200).json(responseBody);
    } catch (error) {
        next(error as HTTPError);
    }
}

export const updateThreadReaction = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const threadReaction = await prisma.threadReaction.findUnique({
            where: {
              id: req.params.id,
            },
        });
        if (!threadReaction) {
            throw new NotFoundError("ThreadReaction not found");
        }
        const record = await prisma.threadReaction.update({
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

export const deleteThreadReaction = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const threadReaction = await prisma.threadReaction.findUnique({
            where: {
              id: req.params.id,
            },
        });
        if (!threadReaction) {
            throw new NotFoundError("ThreadReaction not found");
        }
        const record = await prisma.threadReaction.delete({
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