'use client'
import styles from '../../../styles/air_bar.module.scss'
import { useEffect, useState, useContext } from 'react'
import AirContext from '@/context/AirContext';

export default function AirBarButton(
{
    label,
    code,
    hidden = false,
    hiddenFromSignedIn = false,
    hiddenAfterSignedIn = false,
    children
} : {
    label?: string,
    code: string,
    hidden?: boolean,
    hiddenFromSignedIn?: boolean,
    hiddenAfterSignedIn?: boolean,
    children?: React.ReactNode,
}
) {
    const airContext = useContext(AirContext);
    const here = airContext.code === code;

    let classNames = [styles.air_bar_button];
    if (here) classNames.push(styles.air_bar_button___active);
    let classNamesString = classNames.join(' ');

    let [display, setDisplay] = useState(false);
    useEffect(() => {
        const signedIn = localStorage.getItem('access_token') ? true : false;
        setDisplay(true);
        if (hidden && !here) setDisplay(false);
        if (hiddenFromSignedIn && !signedIn && !here) setDisplay(false);
        if (hiddenAfterSignedIn && signedIn && !here) setDisplay(false);
    }, [airContext.code])

    return (
        display ? 
            <button className={classNamesString} onClick={()=>{airContext.toggleAir(code)}} aria-label={code}>
                <div className={styles.air_bar_button__inner}>
                    <div className={styles.air_bar_button__icon}>
                        {children}
                    </div>
                    {label ?
                        <div className={styles.air_bar_button__label}>
                            {label}
                        </div>
                    : null}
                </div>
            </button>
        : null
    )
}