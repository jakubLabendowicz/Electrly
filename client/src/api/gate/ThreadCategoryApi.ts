"use client"
import GateRestClient from './GateRestClient';
const client = new GateRestClient();

export const createCategory = async (data: any) => {
    return new Promise((resolve, reject) => {
        client.post('/t/categories', data)
        .then(response => {
            resolve(response);
        })
        .catch(error => {
            reject(error);
        });
    });
}

export const getCategory = async (id: string) => {
    return new Promise((resolve, reject) => {
        client.get('/t/categories/' + id)
        .then((response: any) => {
            console.log(response);
            resolve(response);
        })
        .catch(error => {
            reject(error);
        });
    });
}

export const getCategories = async () => {
    return new Promise((resolve, reject) => {
        client.get('/t/categories' )
        .then((response: any) => {
            resolve(response);
        })
        .catch(error => {
            reject(error);
        });
    });
}