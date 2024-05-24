'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from '../../../styles/module_bar.module.scss'
import { useEffect, useState, useContext } from 'react'
import ModuleBarContext from '@/context/ModuleBarContext';

export default function ModuleBarButton(
{
    label,
    href,
    activeHrefPattern,
    disactiveHrefPattern,
    hidden = false,
    hiddenFromSignedIn = false,
    hiddenAfterSignedIn = false,
    children
}: {
    label?: string,
    href?: string,
    activeHrefPattern: string,
    disactiveHrefPattern?: string,
    hidden?: boolean,
    hiddenFromSignedIn?: boolean,
    hiddenAfterSignedIn?: boolean,
    children?: React.ReactNode,
}) {
    const moduleBarContext = useContext(ModuleBarContext);

    const pathname = usePathname();
    let here = pathname.match(activeHrefPattern);
    if(disactiveHrefPattern && pathname.match(disactiveHrefPattern)) here = null;

    if(!href) href = pathname;

    let classNames = [styles.module_bar_button__icon];
    if (here) classNames.push(styles.module_bar_button__icon___active);
    let classNamesString = classNames.join(' ');

    let [display, setDisplay] = useState(false);
    useEffect(() => {
        const signedIn = localStorage.getItem('access_token') ? true : false;
        setDisplay(true);
        if (hidden && !here) setDisplay(false);
        if (hiddenFromSignedIn && !signedIn && !here) setDisplay(false);
        if (hiddenAfterSignedIn && signedIn && !here) setDisplay(false);
        if (hiddenFromSignedIn && !signedIn && here) window.location.href = '/signin';
    }, [pathname])
    return (
        display ? 
            <Link className={styles.module_bar_button} href={href} aria-label={label}>
                <div className={styles.module_bar_button__inner}>
                    <div className={classNamesString}>
                        {children}
                    </div>
                    {label && moduleBarContext.width && moduleBarContext.width > 128 ?
                        <div className={styles.module_bar_button__label}>
                            {label}
                        </div>
                    : null}
                </div>
            </Link>
        : null
    )
}