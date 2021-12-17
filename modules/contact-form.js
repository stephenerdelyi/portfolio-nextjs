import React from 'react'
import ContactField from './contact-field'
import Classes from '../functions/classes'
import styles from '../styles/blocks/contact.module.scss'

import getMailerEndpoint from '../functions/get-mailer-endpoint'

export default class ContactForm extends React.Component {
    constructor(props) {
        super(props);

        this.fields = this.props.data;

        this.formName = React.createRef();
        this.formEmail = React.createRef();
        this.formMessage = React.createRef();

        this.state = {
            sending: false
        };
    }

    validateForm(e) {
        e.preventDefault();

        //check for empty values
        this.formName.current.validate();
        this.formEmail.current.validate();
        this.formMessage.current.validate();

        //confirm all fields are valid
        if(!Object.values(this.state.fields).includes(false)) {
            this.sendMessage();
        }
    }

    errorHandler(form_name, is_valid) {
        this.setState({
            fields: {
                [form_name]: is_valid
            }
        });
    }

    async sendMessage() {
        this.setState({
            sending: true
        });

        let form_data = {
            name: this.formName.current.formItem.current.value,
            email: this.formEmail.current.formItem.current.value,
            message: this.formMessage.current.formItem.current.value
        }

        const response = await fetch(getMailerEndpoint() + '/send', {
            method: 'POST',
            body: JSON.stringify(form_data),
            headers: {
                "Content-type": "text/plain; charset=UTF-8"
            }
        }).then((res) => res.json()).then((response) => {
            if(!response.errors && response.sent == true) {
                //reset after the message window has opened
                setTimeout(() => {
                    this.formName.current.reset();
                    this.formEmail.current.reset();
                    this.formMessage.current.reset();
                }, 2000);

                this.setState({
                    form_successfully_sent: true,
                    sending: false
                });
            } else {
                this.setState({
                    form_successfully_sent: false,
                    sending: false
                });
            }

            setTimeout(() => {
                this.setState({
                    form_successfully_sent: null
                });
            }, 5000);
        });
    }

    render() {
        let form_classes = [];
        let button_text = 'Send Message';

        if(this.state.sending) {
            form_classes = ['--disabled'];
            button_text = 'Sending...';
        }

        let form_message_classes = [];
        let message_title = '';
        let message_text = '';

        if(this.state.hasOwnProperty('form_successfully_sent')) {
            if(this.state.form_successfully_sent == true) {
                form_message_classes = ['--active'];
                message_title = this.fields.successful_title;
                message_text = this.fields.successful_text;
            } else if(this.state.form_successfully_sent == false) {
                form_message_classes = ['--active'];
                message_title = this.fields.unsuccessful_title;
                message_text = this.fields.unsuccessful_text;
            }
        }

        return <>
            <form className={Classes([[styles, ['block-contact__contact-form__form', ...form_classes]]])}>
                <ContactField ref={this.formName} tag="input" placeholder="Name" fieldType="name" type="text" errorHandler={(form_name, is_valid) => { this.errorHandler(form_name, is_valid) }}/>
                <ContactField ref={this.formEmail} tag="input" placeholder="E-mail" fieldType="email" type="text" errorHandler={(form_name, is_valid) => { this.errorHandler(form_name, is_valid) }}/>
                <ContactField ref={this.formMessage} tag="textarea" placeholder="Message" fieldType="message" errorHandler={(form_name, is_valid) => { this.errorHandler(form_name, is_valid) }}/>
                <button onClick={(e) => { this.validateForm(e) }} className={styles['block-contact__form-button']}>{button_text}</button>
                <div className={Classes([[styles, ['block-contact__message-container', ...form_message_classes]]])}>
                    <p className={styles['block-contact__message-container__title']}>{message_title}</p>
                    <p className={styles['block-contact__message-container__text']}>{message_text}</p>
                </div>
            </form>
        </>
    }
}
