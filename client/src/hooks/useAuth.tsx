"use client"
import { authorize, refreshToken, revokeToken } from '@/api/gate/ClientAuthorizationApi';
import { createUser, getUser } from '@/api/gate/UserApi';
import { createUserPassword } from '@/api/gate/UserPasswordApi';
import { createUserPasswordCode } from '@/api/gate/UserPasswordCodeApi';
import { useState } from 'react';

export default function useAuth() {
    const [nickname, setNickname] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [zoneInfo, setZoneInfo] = useState('');
    const [locale, setLocale] = useState('');

    const [passwordCode, setPasswordCode] = useState('F-');
    const [password, setPassword] = useState('');

    const [stage, setStage] = useState(0);

    const doCreateUser = async () => {
        createUser({
            nickname: nickname,
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            gender: gender,
            // birthdate: birthdate,
            // zoneInfo: zoneInfo,
            // locale: locale
        })
        .then((res) => {
            setStage(stage + 1);
            return res;
        })
        .catch((err) => {
            return err;
        })
    }

    const doCreateUserPasswordCode = async () => {
        createUserPasswordCode({
            email: email
        })
        .then((res) => {
            setStage(stage + 1);
            return res;
        })
        .catch((err) => {
            return err;
        })
    }

    const doCreateUserPassword = async () => {
        createUserPassword({
            code: passwordCode,
            password: password
        })
        .then((res) => {
            setStage(stage + 1);
            return res;
        })
        .catch((err) => {
            return err;
        })
    }

    const doAuthorize = async () => {
        authorize({
            grantType: 'password',
            responseType: 'token',
            scopes: [
                "FULL_ACCESS"
            ],
            clientId: 'cll6z5cqk0000vy5gay0owbgo',
            clientSecret: 'rgohp22r9sebplofdy19ea',
            email: email,
            password: password
        })
        .then((res: any) => {
            setStage(stage + 1);
            console.log(res);
            localStorage.setItem('access_token', res.data.clientAccessToken.token);
            localStorage.setItem('refresh_token', res.data.clientRefreshToken.token);
            window.location.href = '/';
            return res;
        })
        .catch((err) => {
            return err;
        })
    }

    const doRefreshToken = async () => {
        refreshToken()
        .then((res) => {
            return res;
        })
        .catch((err) => {
            return err;
        })

    }

    const doRevokeToken = async () => {
        revokeToken({
            accesstoken: localStorage.getItem('access_token'),
            refreshtoken: localStorage.getItem('refresh_token')  
        })
        .then((res) => {
            setStage(stage + 1);
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
            window.location.href = '/gate/signin';
            return res;
        })
        .catch((err) => {
            return err;
        })
    }

    return {
        nickname,
        setNickname,
        firstName,
        setFirstName,
        lastName,
        setLastName,
        email,
        setEmail,
        phone,
        setPhone,
        gender,
        setGender,
        birthdate,
        setBirthdate,
        zoneInfo,
        setZoneInfo,
        locale,
        setLocale,
        passwordCode,
        setPasswordCode,
        password,
        setPassword,
        stage,
        setStage,
        doCreateUser,
        doCreateUserPasswordCode,
        doCreateUserPassword,
        doAuthorize,
        doRefreshToken,
        doRevokeToken
    }
}