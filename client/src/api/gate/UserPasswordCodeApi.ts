"use client"
import GateRestClient from './GateRestClient';
const client = new GateRestClient();

export const createUserPasswordCode = async (data: any) => {
    return new Promise((resolve, reject) => {
        client.post('/u/passwordCodes', data)
        .then(response => {
            resolve(response);
        })
        .catch(error => {
            reject(error);
        });
    });
}