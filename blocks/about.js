import styles from '../styles/blocks/about.module.scss'

export default function About(props) {
    const fields = props.data.fields

    return <>
        <div className={styles['block-about']}>
            <h2 className={styles['block-about__title']}>{fields.title}</h2>
        	<h3 className={styles['block-about__subtitle']}>{fields.subtitle}</h3>
        	<p className={styles['block-about__text']}>{fields.text_content}</p>
        </div>
    </>
}
