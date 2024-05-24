"use client"
import { createContext, useContext, useState } from 'react';

export default function usePageBar() {
    const [width, setWidth] = useState(0);
    return {
        width,
        setWidth,
    }
}