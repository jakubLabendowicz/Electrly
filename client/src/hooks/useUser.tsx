"use client"
import { getUser } from '@/api/gate/UserApi';
import { useEffect, useState } from 'react';

export default function useUser() {
    const [isSignedOn, setIsSignedOn] = useState(false);

    const [nickname, setNickname] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [zoneInfo, setZoneInfo] = useState('');
    const [locale, setLocale] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const [language, setLanguage] = useState('');
    const [theme, setTheme] = useState('');

    const doGetUser = async () => {
        return new Promise((resolve, reject) => {
            getUser('me')
            .then((response: any) => {
                setIsSignedOn(true);
                setNickname(response.data.nickname);
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
                setEmail(response.data.email);
                setPhone(response.data.phone);
                setGender(response.data.gender);
                setBirthdate(response.data.birthdate);
                setZoneInfo(response.data.zoneInfo);
                setLocale(response.data.locale);
                setImageUrl(response.data.imageUrl);
                setLanguage(response.data.language);
                setTheme(response.data.theme);
                resolve(response);
            })
            .catch(error => {
                setIsSignedOn(false);
                reject(error);
            });
        });
    }

    useEffect(() => {
        doGetUser();
    }, []);

    return {
        isSignedOn,
        setIsSignedOn,
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
        imageUrl,
        setImageUrl,
        language,
        setLanguage,
        theme,
        setTheme,
        doGetUser
    }
}