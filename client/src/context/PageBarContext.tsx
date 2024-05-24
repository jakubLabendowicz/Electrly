"use client"
import { createContext, useContext, useState } from 'react';

const PageBarContext = createContext({
    width: 64,
    setWidth: (width: number) => { },
});

export default PageBarContext;