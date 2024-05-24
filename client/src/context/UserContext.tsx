"use client"
import { createContext, useContext, useState } from 'react';

const UserContext = createContext({
    isSignedOn: false,
    setIsSignedOn: (isSignedOn: boolean) => { },
    nickname: '',
    setNickname: (nickname: string) => { },
    firstName: '',
    setFirstName: (firstName: string) => { },
    lastName: '',
    setLastName: (lastName: string) => { },
    email: '',
    setEmail: (email: string) => { },
    phone: '',
    setPhone: (phone: string) => { },
    gender: '',
    setGender: (gender: string) => { },
    birthdate: '',
    setBirthdate: (birthdate: string) => { },
    zoneInfo: '',
    setZoneInfo: (zoneInfo: string) => { },
    locale: '',
    setLocale: (locale: string) => { },
    imageUrl: '',
    setImageUrl: (imageUrl: string) => { },
    language: '',
    setLanguage: (language: string) => { },
    theme: '',
    setTheme: (theme: string) => { },

    doGetUser: () => { },
});

export default UserContext;