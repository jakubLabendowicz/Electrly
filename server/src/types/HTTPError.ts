export const HTTPErrorType = "error";

export enum HTTPErrorMessage {
    BAD_REQUEST = "Bad request",
    UNAUTHORIZED = "Unauthorized",
    FORBIDDEN = "No permission",
    NOT_FOUND = "Not found",
    CONFLICT = "Conflict",
    INTERNAL_SERVER_ERROR = "Internal server error"
}

export enum HTTPErrorStatus {
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    CONFLICT = 409,
    INTERNAL_SERVER_ERROR = 500
}

export class HTTPError extends Error {
    status:number;

    constructor(message:string, status:number) {
        super(message);
        this.status = status;
    }
}

export class BadRequestError extends HTTPError {
    constructor(message:string = HTTPErrorMessage.BAD_REQUEST) {
        super(message, HTTPErrorStatus.BAD_REQUEST);
    }
}

export class UnauthorizedError extends HTTPError {
    constructor(message:string = HTTPErrorMessage.UNAUTHORIZED) {
        super(message, HTTPErrorStatus.UNAUTHORIZED);
    }
}

export class ForbiddenError extends HTTPError {
    constructor(message:string = HTTPErrorMessage.FORBIDDEN) {
        super(message, HTTPErrorStatus.FORBIDDEN);
    }
}

export class NotFoundError extends HTTPError {
    constructor(message:string = HTTPErrorMessage.NOT_FOUND) {
        super(message, HTTPErrorStatus.NOT_FOUND);
    }
}

export class ConflictError extends HTTPError {
    constructor(message:string = HTTPErrorMessage.CONFLICT) {
        super(message, HTTPErrorStatus.CONFLICT);
    }
}

export class InternalServerError extends HTTPError {
    constructor(message:string = HTTPErrorMessage.INTERNAL_SERVER_ERROR) {
        super(message, HTTPErrorStatus.INTERNAL_SERVER_ERROR);
    }
}