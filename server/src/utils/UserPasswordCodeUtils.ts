import { UserEmailNotificationBuilder } from '../builders/UserEmailNotificationBuilder';
import { Prisma, PrismaClient } from '@prisma/client';
import { HTTPResponseBody, HTTPResponseBodyResult } from '../types/HTTPResponse';
import { HTTPSuccessType, HTTPSuccessMessage, HTTPSuccessStatus } from '../types/HTTPSuccess';
import { HTTPErrorType, HTTPErrorMessage, HTTPErrorStatus, HTTPError, BadRequestError, UnauthorizedError, ForbiddenError, NotFoundError, ConflictError, InternalServerError } from '../types/HTTPError';

const prisma = new PrismaClient();

export const processUserPasswordCode = async (user:any):Promise<any> => {
    try {
        const record = await prisma.userPasswordCode.create({
            data: {
                userId: user.id,
                code: 'F-' + Math.floor(100000 + Math.random() * 900000).toString(),
                expiresAt: new Date(Date.now() + 3600000)
            },
        });
        new UserEmailNotificationBuilder()
        .withUserId(user.id)
        .withSubject("Password code")
        .withTemplate("UserPasswordCodeCreated")
        .withContext({
            firstName: user.firstName,
            code: record.code
        })
        .send();
        return record;
    } catch (error) {
        throw (error as HTTPError);
    }
}