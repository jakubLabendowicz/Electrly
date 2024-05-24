"use client"
import { createContext, useContext, useState } from 'react';

const AppBarContext = createContext({
    height: 64,
    setheight: (height: number) => { },
});

export default AppBarContext;