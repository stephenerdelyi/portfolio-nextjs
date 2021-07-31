import styles from '../styles/blocks/about.module.scss'

export default function About(props) {
    var fields = props.data.fields

    var title = {__html: fields.title}
    var subtitle = {__html: fields.subtitle}
    var text_content = {__html: fields.text_content}

    return <>
        <div className={styles['block-about']}>
            <h2 className={styles['block-about__title']} dangerouslySetInnerHTML={title}></h2>
        	<h3 className={styles['block-about__subtitle']} dangerouslySetInnerHTML={subtitle}></h3>
        	<p className={styles['block-about__text']} dangerouslySetInnerHTML={text_content}></p>
        </div>
    </>
}
