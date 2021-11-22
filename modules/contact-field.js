import React from 'react'
import Classes from '../functions/classes'
import styles from '../styles/blocks/contact.module.scss'

export default class ContactForm extends React.Component {
    constructor(props) {
        super(props);

        this.formItem = React.createRef();

        this.state = {
            is_valid_field: 'empty'
        }

        //report error status to parent
        this.props.errorHandler(this.props.fieldType, false);
    }

    reset() {
        this.formItem.current.value = '';

        this.setState({
            is_valid_field: 'empty'
        });

        //report error status to parent
        this.props.errorHandler(this.props.fieldType, false);
    }

    validate() {
        const field = this.formItem.current;
        const field_type = field.getAttribute('field-type');
        let is_valid = false;

        if(field_type == 'name') {
            if(field.value.length >= 2) {
                is_valid = true
            }
        } else if(field_type == 'email') {
            if(new RegExp(/^\S+@\S+\.\S+$/).test(field.value)) {
                is_valid = true
            }
        } else if(field_type == 'message') {
            if(field.value.length > 1) {
                is_valid = true
            }
        }

        this.setState({ is_valid_field: is_valid });

        //report error status to parent
        this.props.errorHandler(this.props.fieldType, is_valid);
    }

    render() {
        let InputType = this.props.tag;
        let field_classes = InputType == 'input' ? ['block-contact__form-input'] : ['block-contact__form-textarea'];
        let error_classes = (this.state.is_valid_field || this.state.is_valid_field == 'empty' ? [] : ['--error']);

        return <>
            <InputType ref={this.formItem} onBlur={(e) => { this.validate() }} className={Classes([[styles, [...field_classes, ...error_classes]]])} placeholder={this.props.placeholder} field-type={this.props.fieldType} type={this.props.type}></InputType>
        </>
    }
}
