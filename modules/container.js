import Classes from '../functions/classes.js'
import styles from '../styles/skeleton/containers.module.scss'

export default function Container({children, id, classes = [], aria_label}) {
    return <>
        <section id={id} className={Classes([[styles, ['container', ...classes]]])} aria_label={aria_label}>
            <div className={styles['container__content']}>
                {children}
            </div>
        </section>
    </>
}
