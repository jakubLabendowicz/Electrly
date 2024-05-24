import styles from '../../styles/air_content.module.scss'

export default function AirContent({
    header,
    children,
    footer,
}: {
    header?: React.ReactNode,
    children?: React.ReactNode,
    footer?: React.ReactNode,
}) {
    return (
        <div className={styles.air_content}>
            <div className={styles.air_content__inner}>
                {header ?
                    <div className={styles.air_content__header}>
                        {header}
                    </div>
                :null}
                <div className={styles.air_content__main}>
                    {children}
                </div>
                <div className={styles.air_content__footer}>
                    {footer}
                </div>
            </div>
        </div>
    )
}