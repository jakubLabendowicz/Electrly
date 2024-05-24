import express, { Request, Response, NextFunction, Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { HTTPResponseBody, HTTPResponseBodyResult } from '../types/HTTPResponse';
import { HTTPSuccessType, HTTPSuccessMessage, HTTPSuccessStatus } from '../types/HTTPSuccess';
import { HTTPErrorType, HTTPErrorMessage, HTTPErrorStatus, HTTPError, BadRequestError, UnauthorizedError, ForbiddenError, NotFoundError, ConflictError, InternalServerError } from '../types/HTTPError';
const prisma = new PrismaClient();

export const createThreadCommentReaction = async (req: Request, res: Response, next:NextFunction) => {
    try {
        // const threadCommentReaction = await prisma.threadCommentReaction.findUnique({
        //     where: {
        //       userId: req.body.data.name,
        //       active: true
        //     },
        //   });
        // if (threadCommentReaction) {
        //     throw new ConflictError("ThreadCommentReaction already exists");
        // }
        const record = await prisma.threadCommentReaction.create({
            data: { ...req.body.data},
        });
        let responseBodyResult = new HTTPResponseBodyResult(HTTPSuccessMessage.RECORD_CREATED, HTTPSuccessType, HTTPSuccessStatus.CREATED, req.originalUrl);
        let responseBody = new HTTPResponseBody(record, responseBodyResult);
        res.status(200).json(responseBody);
    } catch (error) {
        next(error as HTTPError);
    }
};

export const findThreadCommentReaction = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const record = await prisma.threadCommentReaction.findUnique({
            where: {
              id: req.params.id,
            },
          });
        if (!record) {
            throw new NotFoundError("ThreadCommentReaction not found");
        }
        let responseBodyResult = new HTTPResponseBodyResult(HTTPSuccessMessage.RECORD_FOUND, HTTPSuccessType, HTTPSuccessStatus.OK, req.originalUrl);
        let responseBody = new HTTPResponseBody(record, responseBodyResult);
        res.status(200).json(responseBody);
    } catch (error) {
        next(error as HTTPError);
    }
}

export const findThreadCommentReactions = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const records = await prisma.threadCommentReaction.findMany();
        if (records.length === 0) {
            throw new NotFoundError("ThreadCommentReaction not found");
        }
        let responseBodyResult = new HTTPResponseBodyResult(HTTPSuccessMessage.RECORDS_FOUND, HTTPSuccessType, HTTPSuccessStatus.OK, req.originalUrl);
        let responseBody = new HTTPResponseBody(records, responseBodyResult);
        res.status(200).json(responseBody);
    } catch (error) {
        next(error as HTTPError);
    }
}

export const updateThreadCommentReaction = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const threadCommentReaction = await prisma.threadCommentReaction.findUnique({
            where: {
              id: req.params.id,
            },
        });
        if (!threadCommentReaction) {
            throw new NotFoundError("ThreadCommentReaction not found");
        }
        const record = await prisma.threadCommentReaction.update({
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

export const deleteThreadCommentReaction = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const threadCommentReaction = await prisma.threadCommentReaction.findUnique({
            where: {
              id: req.params.id,
            },
        });
        if (!threadCommentReaction) {
            throw new NotFoundError("ThreadCommentReaction not found");
        }
        const record = await prisma.threadCommentReaction.delete({
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