import styles from '../styles/blocks/footer.module.scss'

export default function Footer(props) {
    var fields = props.data.fields;

    return <>
        <div className={styles['block-footer']}>
        	<p className={styles['block-footer__text']}>{fields.text_content}</p>
            <a className={styles['block-footer__link']} href="https://github.com/stephenerdelyi/portfolio-nextjs">Repository</a>
        </div>
    </>
}
