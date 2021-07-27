import Classes from '../functions/classes'
import styles from '../styles/blocks/contact.module.scss'

export default function Contact() {
    return <>
        <div className={styles['block-contact']}>
            <div className={styles['block-contact__title']}>Contact</div>
            <div className={styles['block-contact__container']}>
                <div className={styles['block-contact__left']}>
                    <div className={styles['block-contact__contact-form__header']}>
                        <p className={styles['block-contact__contact-form__header__title']}>Get in touch</p>
                    </div>
                    <div className={styles['block-contact__contact-form__form']}>
                        <input className={styles['block-contact__form-input']} aria-label="Contact Name" placeholder="Name" type="text"/>
                        <input className={styles['block-contact__form-input']} aria-label="Contact Email" placeholder="E-mail" type="text"/>
                        <textarea className={styles['block-contact__form-textarea']} aria-label="Contact Message" placeholder="Message"></textarea>
                        <button className={styles['block-contact__form-button']}>Send Message</button>
                    </div>
                </div>
                <div className={styles['block-contact__right']}>
                    <p className={styles['block-contact__text']}>Feel free to drop me a line using the form, or email me for messages with longer content and/or attachments.</p>
                    <a href="mailto:stephenerdelyi@icloud.com" className={Classes([[styles, ['block-contact__contact-item', '--email']]])}>stephenerdelyi@icloud.com</a>
                    <a href="tel:7755152318" className={Classes([[styles, ['block-contact__contact-item', '--phone']]])}>+1.775.515.2318</a>
                    <a href="#" className={styles['block-contact__button']}>Visit my LinkedIn</a>
                </div>
            </div>
        </div>
    </>
}
