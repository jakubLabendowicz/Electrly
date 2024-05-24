import express, { Request, Response, NextFunction, Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { HTTPResponseBody, HTTPResponseBodyResult } from '../types/HTTPResponse';
import { HTTPSuccessType, HTTPSuccessMessage, HTTPSuccessStatus } from '../types/HTTPSuccess';
import { HTTPErrorType, HTTPErrorMessage, HTTPErrorStatus, HTTPError, BadRequestError, UnauthorizedError, ForbiddenError, NotFoundError, ConflictError, InternalServerError } from '../types/HTTPError';
const prisma = new PrismaClient();

export const createRolePermission = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const rolePermission = await prisma.rolePermission.findFirst({
            where: {
                roleId: req.body.data.roleId,
                permissionId: req.body.data.permissionId,
                active: true
            },
          });
        if (rolePermission) {
            throw new ConflictError("Role permission already exists");
        }
        const record = await prisma.rolePermission.create({
            data: { ...req.body.data},
        });
        let responseBodyResult = new HTTPResponseBodyResult(HTTPSuccessMessage.RECORD_CREATED, HTTPSuccessType, HTTPSuccessStatus.CREATED, req.originalUrl);
        let responseBody = new HTTPResponseBody(record, responseBodyResult);
        res.status(201).json(responseBody);
    } catch (error) {
        next(error as HTTPError);
    }
};

export const findRolePermission = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const record = await prisma.rolePermission.findUnique({
            where: {
              id: req.params.id,
            },
          });
        if (!record) {
            throw new NotFoundError("Role permission not found");
        }
        let responseBodyResult = new HTTPResponseBodyResult(HTTPSuccessMessage.RECORD_FOUND, HTTPSuccessType, HTTPSuccessStatus.OK, req.originalUrl);
        let responseBody = new HTTPResponseBody(record, responseBodyResult);
        res.status(200).json(responseBody);
    } catch (error) {
        next(error as HTTPError);
    }
}

export const findRolePermissions = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const records = await prisma.rolePermission.findMany();
        if (records.length === 0) {
            throw new NotFoundError("Role permission not found");
        }
        let responseBodyResult = new HTTPResponseBodyResult(HTTPSuccessMessage.RECORDS_FOUND, HTTPSuccessType, HTTPSuccessStatus.OK, req.originalUrl);
        let responseBody = new HTTPResponseBody(records, responseBodyResult);
        res.status(200).json(responseBody);
    } catch (error) {
        next(error as HTTPError);
    }
}

export const updateRolePermission = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const rolePermission = await prisma.rolePermission.findUnique({
            where: {
              id: req.params.id,
            },
        });
        if (!rolePermission) {
            throw new NotFoundError("Role permission not found");
        }
        const record = await prisma.rolePermission.update({
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

export const deleteRolePermission = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const rolePermission = await prisma.rolePermission.findUnique({
            where: {
              id: req.params.id,
            },
        });
        if (!rolePermission) {
            throw new NotFoundError("Role permission not found");
        }
        const record = await prisma.rolePermission.delete({
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