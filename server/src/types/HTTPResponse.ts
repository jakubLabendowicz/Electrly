export class HTTPResponseBodyResult {
    message?: string;
    type?: string;
    status?: number;
    instance?: string;
    constructor(message?: string, type?: string, status?: number, instance?: string) {
        this.message = message;
        this.type = type;
        this.status = status;
        this.instance = instance;
    }
}

export class HTTPResponseBody {
    data?: any;
    result?: HTTPResponseBodyResult;
    constructor(data?: any, result?: HTTPResponseBodyResult) {
        this.data = data;
        this.result = result;
    }
}