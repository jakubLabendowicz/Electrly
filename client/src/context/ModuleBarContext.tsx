"use client"
import { createContext, useContext, useState } from 'react';

const ModuleBarContext = createContext({
    width: 64,
    setWidth: (width: number) => { },
});

export default ModuleBarContext;