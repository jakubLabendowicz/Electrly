import styles from '../../styles/page_content_section.module.scss'

export default function PageContentSection({
    title,
    showTitle = true,
    children,
}: {
    title?: string,
    showTitle?: boolean,
    children?: React.ReactNode,
}) {
    return (
        <div className={styles.page_content_section}>
            <div className={styles.page_content_section__inner}>
                {showTitle ?
                    <div className={styles.page_content_section__title}>
                        {title}
                    </div>
                : null}
                <div className={styles.page_content_section__main}>
                    {children}
                </div>
            </div>
        </div>
    )
}