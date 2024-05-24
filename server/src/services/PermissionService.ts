import express, { Request, Response, NextFunction, Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { HTTPResponseBody, HTTPResponseBodyResult } from '../types/HTTPResponse';
import { HTTPSuccessType, HTTPSuccessMessage, HTTPSuccessStatus } from '../types/HTTPSuccess';
import { HTTPErrorType, HTTPErrorMessage, HTTPErrorStatus, HTTPError, BadRequestError, UnauthorizedError, ForbiddenError, NotFoundError, ConflictError, InternalServerError } from '../types/HTTPError';
const prisma = new PrismaClient();

export const createPermission = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const permission = await prisma.permission.findUnique({
            where: {
              code: req.body.data.code,
              active: true
            },
          });
        if (permission) {
            throw new ConflictError("Permission already exists");
        }
        const record = await prisma.permission.create({
            data: { ...req.body.data},
        });
        let responseBodyResult = new HTTPResponseBodyResult(HTTPSuccessMessage.RECORD_CREATED, HTTPSuccessType, HTTPSuccessStatus.CREATED, req.originalUrl);
        let responseBody = new HTTPResponseBody(record, responseBodyResult);
        res.status(201).json(responseBody);
    } catch (error) {
        next(error as HTTPError);
    }
};

export const findPermission = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const record = await prisma.permission.findUnique({
            where: {
              id: req.params.id,
            },
          });
        if (!record) {
            throw new NotFoundError("Permission not found");
        }
        let responseBodyResult = new HTTPResponseBodyResult(HTTPSuccessMessage.RECORD_FOUND, HTTPSuccessType, HTTPSuccessStatus.OK, req.originalUrl);
        let responseBody = new HTTPResponseBody(record, responseBodyResult);
        res.status(200).json(responseBody);
    } catch (error) {
        next(error as HTTPError);
    }
}

export const findPermissions = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const records = await prisma.permission.findMany();
        if (records.length === 0) {
            throw new NotFoundError("Permission not found");
        }
        let responseBodyResult = new HTTPResponseBodyResult(HTTPSuccessMessage.RECORDS_FOUND, HTTPSuccessType, HTTPSuccessStatus.OK, req.originalUrl);
        let responseBody = new HTTPResponseBody(records, responseBodyResult);
        res.status(200).json(responseBody);
    } catch (error) {
        next(error as HTTPError);
    }
}

export const updatePermission = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const permission = await prisma.permission.findUnique({
            where: {
              id: req.params.id,
            },
        });
        if (!permission) {
            throw new NotFoundError("Permission not found");
        }
        const record = await prisma.permission.update({
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

export const deletePermission = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const permission = await prisma.permission.findUnique({
            where: {
              id: req.params.id,
            },
        });
        if (!permission) {
            throw new NotFoundError("Permission not found");
        }
        const record = await prisma.permission.delete({
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