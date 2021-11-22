import styles from '../styles/blocks/footer.module.scss'

export default function Footer(props) {
    const fields = props.data.fields;

    return <>
        <div className={styles['block-footer']}>
        	<p className={styles['block-footer__text']}>{fields.text_content} <a className={styles['block-footer__link']} href="https://github.com/stephenerdelyi/portfolio-nextjs">Repository</a></p>
        </div>
    </>
}
