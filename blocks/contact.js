import Classes from '../functions/classes'
import ContactForm from '../modules/contact-form'
import styles from '../styles/blocks/contact.module.scss'

export default function Contact(props) {
    const fields = props.data.fields

    return <>
        <div className={styles['block-contact']}>
            <div className={styles['block-contact__title']}>{fields.title}</div>
            <div className={styles['block-contact__container']}>
                <div className={styles['block-contact__left']}>
                    <div className={styles['block-contact__contact-form__header']}>
                        <p className={styles['block-contact__contact-form__header__title']}>{fields.form_label}</p>
                    </div>
                    <ContactForm data={fields}/>
                </div>
                <div className={styles['block-contact__right']}>
                    <p className={styles['block-contact__text']}>{fields.text_content}</p>
                    {fields.email &&
                        <a href={'mailto:' + fields.email} className={Classes([[styles, ['block-contact__contact-item', '--email']]])}>{fields.email}</a>
                    }
                    {fields.phone_number &&
                        <a href={'tel:' + fields.phone_number} className={Classes([[styles, ['block-contact__contact-item', '--phone']]])}>{fields.phone_number}</a>
                    }
                    {fields.cta_buttons && fields.cta_buttons.map((button, key) => {
                        return (
                            <a key={key} href={button.url} className={styles['block-contact__button']} target={button.target}>{button.title}</a>
                        )
                    })}
                </div>
            </div>
        </div>
    </>
}
