"use client"
import styles from '../../styles/page.module.scss';
import { createContext, useContext, useState } from 'react';
import AppBarContext from '@/context/AppBarContext';
import AirContext from '@/context/AirContext';
import ModuleBarContext from '@/context/ModuleBarContext';
import PageBarContext from '@/context/PageBarContext';

export default function Page({
    bar,
    children,
}: {
    bar?: React.ReactNode,
    children: React.ReactNode
}) {
    const appBarContext = useContext(AppBarContext);
    const airContext = useContext(AirContext);
    const moduleBarContext = useContext(ModuleBarContext);
    const pageBarContext = useContext(PageBarContext);
    let borderRadius = [0, 0, 0, 0];
    if (appBarContext.height && appBarContext.height > 0) {
        if (moduleBarContext.width && moduleBarContext.width > 0) {
            borderRadius[0] = 20;
        }
        if (airContext.open && airContext.width && airContext.width > 0) {
            borderRadius[1] = 20;
        }
    }
    return (
        <div className={styles.page} style={{
            minHeight: appBarContext.height && appBarContext.height > 0 ? `calc(100vh - ${appBarContext.height}px)` : '100vh',
            borderRadius: borderRadius.map((value) => `${value}px`).join(' '),
        }}>
            <div className={styles.page__inner}>
                {bar && pageBarContext.width && pageBarContext.width > 0 ?
                    <div className={styles.page_bar__container} style={{
                        top: appBarContext.height && appBarContext.height > 0 ? appBarContext.height : 0,
                        right: airContext.open && airContext.width && airContext.width > 0 ? airContext.width : 0,
                        width: pageBarContext.width,
                        height: appBarContext.height && appBarContext.height > 0 ? `calc(100% - ${appBarContext.height}px)` : '100%',
                    }}>
                        {bar}
                    </div>
                : null}
                {children ?
                    <div className={styles.page_content__container} style={{
                        minHeight: appBarContext.height && appBarContext.height > 0 ? `calc(100vh - ${appBarContext.height}px)` : '100%',
                        width: pageBarContext.width && pageBarContext.width > 0 ? `calc(100% - ${pageBarContext.width}px)` : '100%',
                        marginRight: pageBarContext.width && pageBarContext.width > 0 ? pageBarContext.width : 0,
                    }}>
                        {children}
                    </div>
                : null}
            </div>
        </div>
    )
}