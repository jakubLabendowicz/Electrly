"use client"
import { toast } from 'react-toastify';

export default class Notification {
    message: string;
    type: string;
    options: any;

    constructor(message: string, type: string) {
        this.message = message;
        this.type = type;
        this.options = {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            type: type
        };
    }

    send() {
        toast(this.message, this.options);
    }
}