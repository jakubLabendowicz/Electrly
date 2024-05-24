'use client'
import styles from '../../styles/module_bar.module.scss'
import { useEffect, useState, useContext } from 'react'
import ModuleBarContext from '@/context/ModuleBarContext';

export default function ModuleBar({
    top,
    center,
    bottom,
}: {
    top?: React.ReactNode,
    center?: React.ReactNode,
    bottom?: React.ReactNode,
}) {
    const moduleBarContext = useContext(ModuleBarContext);
    return (
        <div className={styles.module_bar}>
            <div className={styles.module_bar__inner} style={{
                minWidth: moduleBarContext.width && moduleBarContext.width > 128 ? moduleBarContext.width - 32 : moduleBarContext.width,
            }}>
                <div className={styles.module_bar__top}>
                    {top}
                </div>
                <div className={styles.module_bar__center}>
                    {center}
                </div>
                <div className={styles.module_bar__bottom}>
                    {bottom}
                </div>
            </div>
        </div>
    )
}