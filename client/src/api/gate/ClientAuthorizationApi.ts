"use client"
import GateRestClient from './GateRestClient';
const client = new GateRestClient();

export const authorize = async (data: any) => {
    return new Promise((resolve, reject) => {
        client.post('/c/oauth/authorize', data)
        .then(response => {
            resolve(response);
        })
        .catch(error => {
            reject(error);
        });
    });
}

export const refreshToken = async () => {
    return new Promise((resolve, reject) => {
        client.post('/c/oauth/refresh', {})
        .then(response => {
            resolve(response);
        })
        .catch(error => {
            reject(error);
        });
    });
}

export const introspectToken = async (data: any) => {
    return new Promise((resolve, reject) => {
        client.post('/c/oauth/introspect', data)
        .then(response => {
            resolve(response);
        })
        .catch(error => {
            reject(error);
        });
    });
}

export const revokeToken = async (data: any) => {
    return new Promise((resolve, reject) => {
        client.post('/c/oauth/revoke', data)
        .then(response => {
            resolve(response);
        })
        .catch(error => {
            reject(error);
        });
    });
}