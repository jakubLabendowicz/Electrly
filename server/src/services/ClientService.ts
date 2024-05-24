import express, { Request, Response, NextFunction, Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { HTTPResponseBody, HTTPResponseBodyResult } from '../types/HTTPResponse';
import { HTTPSuccessType, HTTPSuccessMessage, HTTPSuccessStatus } from '../types/HTTPSuccess';
import { HTTPErrorType, HTTPErrorMessage, HTTPErrorStatus, HTTPError, BadRequestError, UnauthorizedError, ForbiddenError, NotFoundError, ConflictError, InternalServerError } from '../types/HTTPError';
const prisma = new PrismaClient();

export const createClient = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const client = await prisma.client.findUnique({
            where: {
              name: req.body.data.name,
              active: true
            },
          });
        if (client) {
            throw new ConflictError("Client already exists");
        }
        let clientSecret = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        const record = await prisma.client.create({
            data: { ...req.body.data, secret: clientSecret},
        });
        let responseBodyResult = new HTTPResponseBodyResult(HTTPSuccessMessage.RECORD_CREATED, HTTPSuccessType, HTTPSuccessStatus.CREATED, req.originalUrl);
        let responseBody = new HTTPResponseBody(record, responseBodyResult);
        res.status(201).json(responseBody);
    } catch (error) {
        next(error as HTTPError);
    }
};

export const findClient = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const record = await prisma.client.findUnique({
            where: {
              id: req.params.id,
            },
          });
        if (!record) {
            throw new NotFoundError("Client not found");
        }
        let responseBodyResult = new HTTPResponseBodyResult(HTTPSuccessMessage.RECORD_FOUND, HTTPSuccessType, HTTPSuccessStatus.OK, req.originalUrl);
        let responseBody = new HTTPResponseBody(record, responseBodyResult);
        res.status(200).json(responseBody);
    } catch (error) {
        next(error as HTTPError);
    }
}

export const findClients = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const records = await prisma.client.findMany();
        if (records.length === 0) {
            throw new NotFoundError("Clients not found");
        }
        let responseBodyResult = new HTTPResponseBodyResult(HTTPSuccessMessage.RECORDS_FOUND, HTTPSuccessType, HTTPSuccessStatus.OK, req.originalUrl);
        let responseBody = new HTTPResponseBody(records, responseBodyResult);
        res.status(200).json(responseBody);
    } catch (error) {
        next(error as HTTPError);
    }
}

export const updateClient = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const client = await prisma.client.findUnique({
            where: {
              id: req.params.id,
            },
        });
        if (!client) {
            throw new NotFoundError("Client not found");
        }
        const record = await prisma.client.update({
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

export const deleteClient = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const client = await prisma.client.findUnique({
            where: {
              id: req.params.id,
            },
        });
        if (!client) {
            throw new NotFoundError("Client not found");
        }
        const record = await prisma.client.delete({
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