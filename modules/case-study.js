import React from 'react'
import Classes from '../functions/classes.js'
import styles from '../styles/skeleton/case-study.module.scss'

export default class CaseStudy extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            open: true
        }
    }

    close() {
        this.setState({
            open: false
        });

        setTimeout(() => {
            this.props.close();
        }, 750);
    }

    render() {
        //apply exit animation classes on state change
        var main_class = (this.state.open == true ? [] : ['case-study__animate-exit']);
        var container_class = (this.state.open == true ? [] : ['case-study__modal-container__animate-exit']);

        return <>
            <div className={Classes([[styles, ['case-study', 'case-study__animate-entry', ...main_class]]])}>
                <div className={Classes([[styles, ['case-study__modal-container', 'case-study__modal-container__animate-entry', ...container_class]]])}>
                    <p className={styles['case-study__close']} onClick={() => { this.close() }}>Close</p>
                    <p className={styles['case-study__text']}>Modal ID: {this.props.id}</p>
                </div>
            </div>
        </>
    }
}
