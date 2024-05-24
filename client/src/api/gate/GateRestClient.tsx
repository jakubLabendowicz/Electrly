"use client"
import RestClient from '../RestClient';

export default class GateRestClient extends RestClient {
    constructor(headers?: any) {
        const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080/api/v1';
        let token: string | null = null;
        try {
            token = localStorage.getItem('access_token');
        } catch (e) {
            console.log(e);
        }
        const HEADERS = {
            'Content-Type': 'application/json',
                // 'User-Agent': window.navigator.userAgent
            'Authorization': 'Bearer' + ' ' + token,
            ...headers
        };
        super(BASE_URL, HEADERS);
    }
}