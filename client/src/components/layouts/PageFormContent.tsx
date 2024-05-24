import styles from '../../styles/page_form_content.module.scss'

export default function FormContent({
    header,
    children,
    footer,
}: {
    header?: React.ReactNode,
    children?: React.ReactNode,
    footer?: React.ReactNode,
}) {
    return (
        <div className={styles.page_form_content}>
            <div className={styles.page_form_content__inner}>
                <div className={styles.page_form}>
                    <div className={styles.page_form__inner}>
                        <div className={styles.page_form__header}>
                            {header}
                        </div>
                        <div className={styles.page_form__main}>
                            {children}
                        </div>
                        <div className={styles.page_form__footer}>
                            {footer}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}