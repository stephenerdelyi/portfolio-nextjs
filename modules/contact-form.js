import React from 'react'
import ContactField from './contact-field'
import Classes from '../functions/classes'
import styles from '../styles/blocks/contact.module.scss'

import getEndpoint from '../functions/get-endpoint'

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

        var form_data = {
            name: this.formName.current.formItem.current.value,
            email: this.formEmail.current.formItem.current.value,
            message: this.formMessage.current.formItem.current.value
        }

        const response = await fetch(getEndpoint() + '/message', {
            method: 'POST',
            body: JSON.stringify(form_data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then((res) => res.json()).then((response) => {
            if(!response.error) {
                //reset after the message window has opened
                setTimeout(() => {
                    this.formName.current.reset();
                    this.formEmail.current.reset();
                    this.formMessage.current.reset();
                }, 2000);

                this.setState({
                    form_successfully_sent: true,
                    form_unsuccessfully_sent: false,
                    sending: false
                });
            } else {
                this.setState({
                    form_successfully_sent: false,
                    form_unsuccessfully_sent: true,
                    sending: false
                });
            }

            setTimeout(() => {
                this.setState({
                    form_successfully_sent: null,
                    form_unsuccessfully_sent: null
                });
            }, 5000);
        });
    }

    render() {
        if(this.state.sending) {
            var form_classes = ['--disabled'];
            var button_text = 'Sending...';
        } else {
            var form_classes = [];
            var button_text = 'Send Message';
        }

        if(this.state.form_successfully_sent || this.state.form_unsuccessfully_sent) {
            if(this.state.form_successfully_sent) {
                var form_message_classes = ['--active'];
                var message_title = this.fields.successful_title;
                var message_text = this.fields.successful_text;
            }

            if(this.state.form_unsuccessfully_sent) {
                var form_message_classes = ['--active'];
                var message_title = this.fields.unsuccessful_title;
                var message_text = this.fields.unsuccessful_text;
            }
        } else {
            var form_message_classes = [];
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
