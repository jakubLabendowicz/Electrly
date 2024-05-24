"use client"
import { createContext, useContext, useState } from 'react';

export default function useModuleBar() {
    const [width, setWidth] = useState(64);
    return {
        width,
        setWidth,
    }
}