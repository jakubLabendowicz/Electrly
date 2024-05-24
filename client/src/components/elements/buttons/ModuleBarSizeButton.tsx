'use client'
import styles from '../../../styles/module_bar.module.scss'
import { useEffect, useState, useContext } from 'react'
import ModuleBarContext from '@/context/ModuleBarContext';

import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';

export default function ModuleBarSizeButton() {
    const moduleBarContext = useContext(ModuleBarContext);

    const changeWidth = () => {
        if (moduleBarContext.width && moduleBarContext.width > 128) {
            moduleBarContext.setWidth(64);
        } else {
            moduleBarContext.setWidth(200);
        }
    }

    return (
        <button className={styles.module_bar_button} onClick={changeWidth} aria-label='Open/close module bar'>
            <div className={styles.module_bar_button__inner}>
                <div className={styles.module_bar_button__icon}>
                    {moduleBarContext.width && moduleBarContext.width > 128 ?
                        <KeyboardArrowLeftOutlinedIcon />
                    :
                        <KeyboardArrowRightOutlinedIcon />
                    }
                </div>
                {moduleBarContext.width && moduleBarContext.width > 128 ?
                    <div className={styles.module_bar_button__label}>
                        Minimize
                    </div>
                : null}
            </div>
        </button>
    )
}