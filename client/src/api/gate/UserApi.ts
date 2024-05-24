"use client"
import GateRestClient from './GateRestClient';
const client = new GateRestClient();

export const createUser = async (data: any) => {
    return new Promise((resolve, reject) => {
        client.post('/u/users', data)
        .then(response => {
            resolve(response);
        })
        .catch(error => {
            reject(error);
        });
    });
}

export const getUser = async (id: string) => {
    return new Promise((resolve, reject) => {
        client.get('/u/users/' + id)
        .then((response: any) => {
            console.log(response);
            resolve(response);
        })
        .catch(error => {
            reject(error);
        });
    });
}