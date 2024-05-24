import { useContext } from 'react';
import styles from '../../styles/air.module.scss'
import AirContext from '@/context/AirContext';

export default function Air({
    code,
    children,
}: {
    code?: string,
    children?: React.ReactNode,
}) {
    const airContext = useContext(AirContext);
    const here = airContext.code === code;

    return (
        here ?
            <div className={styles.air}>
                <div className={styles.air__inner}>
                    <div className={styles.air_content__container}>
                        {children}
                    </div>
                </div>
            </div>
        :null
    )
}