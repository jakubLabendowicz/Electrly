"use client"
import styles from '../../styles/app.module.scss';

import { createContext, useContext, useState } from 'react';
import AppBarContext from '../../context/AppBarContext';
import AirContext from '../../context/AirContext';
import ModuleBarContext from '@/context/ModuleBarContext';

export default function App({
    bar,
    air,
    children,
}: {
    bar?: React.ReactNode,
    air?: React.ReactNode,
    children: React.ReactNode
}) {
    const appBarContext = useContext(AppBarContext);
    const airContext = useContext(AirContext);
    const moduleBarContext = useContext(ModuleBarContext);
    return (
        <div className={styles.app}>
            <div className={styles.app__inner}>
                {bar && appBarContext.height && appBarContext.height > 0 ?
                    <div className={styles.app_bar__container} style={{
                        height: appBarContext.height
                    }}>
                        {bar}
                    </div>
                : null}
                {air && airContext.open && airContext.width && airContext.width > 0 ?
                    <div className={styles.air__container} style={{
                        width: airContext.width,
                        height: appBarContext.height && appBarContext.height > 0 ? `calc(100% - ${appBarContext.height}px)` : '100%',
                    }}>
                        {air}
                    </div>
                : null}
                {children ?
                    <div className={styles.module__container} style={{
                        marginTop: appBarContext.height && appBarContext.height > 0 ? appBarContext.height : 0,
                        minHeight: appBarContext.height && appBarContext.height > 0 ? `calc(100% - ${appBarContext.height}px)` : '100%',
                        width: airContext.open && airContext.width && airContext.width > 0 ? `calc(100% - ${airContext.width}px)` : '100%',
                        marginRight: airContext.open && airContext.width && airContext.width > 0 ? airContext.width : 0,
                    }}>
                        {children}
                    </div>
                : null}
            </div>
        </div>
    )
}