"use client"
import { createContext, useContext, useState } from 'react';

export default function useAppBar() {
    const [height, setheight] = useState(64);
    return {
        height,
        setheight,
    }
}