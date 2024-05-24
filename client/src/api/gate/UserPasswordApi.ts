"use client"
import GateRestClient from './GateRestClient';
const client = new GateRestClient();

export const createUserPassword = async (data: any) => {
    return new Promise((resolve, reject) => {
        client.post('/u/passwords', data)
        .then(response => {
            resolve(response);
        })
        .catch(error => {
            reject(error);
        });
    });
}