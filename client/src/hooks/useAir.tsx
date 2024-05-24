"use client"
import { log } from 'console';
import { createContext, useContext, useState } from 'react';

export default function useAir() {
    const [defaultOpen, setDefaultOpen] = useState(false);
    const [defaultCode, setDefaultCode] = useState('');
    const [defaultWidth, setDefaultWidth] = useState(0);
    const [open, setOpen] = useState(defaultOpen);
    const [code, setCode] = useState(defaultCode);
    const [width, setWidth] = useState(defaultWidth);

    const toggleAir = (newCode: string) => {
        if (newCode !== code || (newCode === defaultCode && width === defaultWidth)) {
            setOpen(true);
            setCode(newCode);
            setWidth(400);
        } else {
            setOpen(defaultOpen);
            setCode(defaultCode);
            setWidth(defaultWidth);
        }
    }

    return {
        defaultOpen,
        setDefaultOpen,
        defaultCode,
        setDefaultCode,
        defaultWidth,
        setDefaultWidth,
        open,
        setOpen,
        code,
        setCode,
        width,
        setWidth,
        toggleAir,
    }
}