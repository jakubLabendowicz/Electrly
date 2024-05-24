import styles from '../../styles/air_content_section.module.scss'

export default function AirContentSection({
    title,
    showTitle = true,
    show = true,
    children,
}: {
    title?: string,
    showTitle?: boolean,
    show?: boolean,
    children?: React.ReactNode,
}) {
    return (
        show ?
            <div className={styles.air_content_section}>
                <div className={styles.air_content_section__inner}>
                    {showTitle ?
                        <div className={styles.air_content_section__title}>
                            {title}
                        </div>
                    : null}
                    <div className={styles.air_content_section__main}>
                        {children}
                    </div>
                </div>
            </div>
        : null
    )
}