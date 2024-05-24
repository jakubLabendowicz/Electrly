"use client"
import { createContext, useContext, useState } from 'react';

const AirContext = createContext({
    defaultOpen: true,
    setDefaultOpen: (open: boolean) => { },
    defaultCode: 'apps',
    setDefaultCode: (code: string) => { },
    defaultWidth: 64,
    setDefaultWidth: (width: number) => { },
    open: true,
    setOpen: (open: boolean) => { },
    code: 'apps',
    setCode: (code: string) => { },
    width: 300,
    setWidth: (width: number) => { },
    toggleAir: (code: string) => { },
});

export default AirContext;