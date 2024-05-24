"use client"
import styles from '../../styles/module.module.scss';

import { createContext, useContext, useState } from 'react';
import AppBarContext from '../../context/AppBarContext';
import AirContext from '../../context/AirContext';
import ModuleBarContext from '@/context/ModuleBarContext';

export default function Module({
    bar,
    children,
}: {
    bar?: React.ReactNode,
    children: React.ReactNode
}) {
    const appBarContext = useContext(AppBarContext);
    const airContext = useContext(AirContext);
    const moduleBarContext = useContext(ModuleBarContext);
    return (
        <div className={styles.module}>
            <div className={styles.module__inner}>
                {bar && moduleBarContext.width && moduleBarContext.width > 0 ?
                    <div className={styles.module_bar__container} style={{
                        width: moduleBarContext.width,
                        height: appBarContext.height && appBarContext.height > 0 ? `calc(100% - ${appBarContext.height}px)` : '100%',
                    }}>
                        {bar}
                    </div>
                : null}
                {children ?
                    <div className={styles.page__container} style={{
                        minHeight: appBarContext.height && appBarContext.height > 0 ? `calc(100vh - ${appBarContext.height}px)` : '100%',
                        width: moduleBarContext.width && moduleBarContext.width > 0 ? `calc(100% - ${moduleBarContext.width}px)` : '100%',
                        marginLeft: moduleBarContext.width && moduleBarContext.width > 0 ? moduleBarContext.width : 0,
                    }}>
                        {children}
                    </div>
                : null}
            </div>
        </div>
    )
}