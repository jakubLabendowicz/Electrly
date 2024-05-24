"use client"

import Notification from "@/utils/NotificationUtils";
import axios, { Axios } from "axios";

export default class RestClient {
    client: Axios;
    constructor(baseURL:string, headers?: any) {
        this.client = axios.create({
            baseURL: baseURL,
            headers: headers
        });
    }

    async get(url:string) {
        return new Promise((resolve, reject) => {
            this.client.get(url)
            .then((response: any) => {
                resolve(response.data);
            })
            .catch((error: any) => {
                if (error.response.data.result) {
                    new Notification(error.response.data.result.message, error.response.data.result.type).send();
                    reject(error.response.data.result);
                } else {
                    new Notification(error.message, 'error').send();
                    reject(error);
                }
            });
        });
    }

    async post(url: string, data: any) {
        return new Promise((resolve, reject) => {
            this.client.post(url, {data: data})
            .then((response: any) => {
                console.log(response);
                new Notification(response.data.result.message, response.data.result.type).send();
                resolve(response.data);
            })
            .catch((error: any) => {
                console.log(error);
                if (error.response.data.result) {
                    new Notification(error.response.data.result.message, error.response.data.result.type).send();
                    reject(error.response.data.result);
                } else {
                    new Notification(error.message, 'error').send();
                    reject(error);
                }
            });
        });
    }

    async put(url: string, data: any) {
        return new Promise((resolve, reject) => {
            this.client.put(url, data)
            .then((response: any) => {
                new Notification(response.data.result.message, response.data.result.type).send();
                resolve(response.data);
            })
            .catch((error: any) => {
                if (error.response.data.result) {
                    new Notification(error.response.data.result.message, error.response.data.result.type).send();
                    reject(error.response.data.result);
                } else {
                    new Notification(error.message, 'error').send();
                    reject(error);
                }
            });
        });
    }

    async delete(url: string) {
        return new Promise((resolve, reject) => {
            this.client.delete(url)
            .then((response: any) => {
                resolve(response.data);
            })
            .catch((error: any) => {
                if (error.response.data.result) {
                    new Notification(error.response.data.result.message, error.response.data.result.type).send();
                    reject(error.response.data.result);
                } else {
                    new Notification(error.message, 'error').send();
                    reject(error);
                }
            });
        });
    }
}