import styles from '../../styles/air_bar.module.scss'

export default function AirBar({
    children,
}: {
    children?: React.ReactNode,
}) {
    return (
        <div className={styles.air_bar}>
            <div className={styles.air_bar__inner}>
                {children}
            </div>
        </div>
    )
}