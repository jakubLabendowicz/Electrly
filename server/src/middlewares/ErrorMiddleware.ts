import { Request, Response, NextFunction} from 'express';
import { HTTPResponseBody, HTTPResponseBodyResult } from '../types/HTTPResponse';
import { HTTPSuccessType, HTTPSuccessMessage, HTTPSuccessStatus } from '../types/HTTPSuccess';
import { HTTPErrorType, HTTPErrorMessage, HTTPErrorStatus, HTTPError, BadRequestError, UnauthorizedError, ForbiddenError, NotFoundError, ConflictError, InternalServerError } from '../types/HTTPError';

export const handleError = (error:Error | HTTPError, req:Request, res:Response, next:NextFunction) => {
    let responseError = error as HTTPError;
    const message = responseError.message || HTTPErrorMessage.INTERNAL_SERVER_ERROR;
    const status = responseError.status || HTTPErrorStatus.INTERNAL_SERVER_ERROR;
    let responseBodyResult = new HTTPResponseBodyResult(message, HTTPErrorType, status, req.originalUrl);
    let responseBody = new HTTPResponseBody(undefined, responseBodyResult);
    res.status(status).json(responseBody);
}

export const handleNotFound = (req:Request, res:Response, next:NextFunction) => {
    let responseBodyResult = new HTTPResponseBodyResult(HTTPErrorMessage.NOT_FOUND, HTTPErrorType, HTTPErrorStatus.NOT_FOUND, req.originalUrl);
    let responseBody = new HTTPResponseBody(undefined, responseBodyResult);
    res.status(HTTPErrorStatus.NOT_FOUND).json(responseBody);
}