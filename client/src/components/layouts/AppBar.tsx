import styles from '../../styles/app_bar.module.scss'

export default function AppBar({
    left,
    center,
    right,
}: {
    left?: React.ReactNode,
    center?: React.ReactNode,
    right?: React.ReactNode,
}) {
    return (
        <div className={styles.app_bar}>
            <div className={styles.app_bar__inner}>
                <div className={styles.app_bar__left}>
                    {left}
                </div>
                <div className={styles.app_bar__center}>
                    {center}
                </div>
                <div className={styles.app_bar__right}>
                    {right}
                </div>
            </div>
        </div>
    )
}