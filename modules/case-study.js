import React from 'react'
import Loading from './loading.js'
import Classes from '../functions/classes.js'
import styles from '../styles/skeleton/case-study.module.scss'
import fancy from '../styles/skeleton/fancy-images.module.scss'

import getEndpoint from '../functions/get-endpoint'

export default class CaseStudy extends React.Component {
    constructor(props) {
        super(props);

        this.getCaseStudy();

        this.state = {
            open: true,
            loading: true
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

    async getCaseStudy() {
        const response = await fetch(getEndpoint() + '/case-study/' + this.props.id, {
            method: 'GET'
        }).then((res) => res.json()).then((response) => {
            if(!response.error) {
                this.case_study = response;
            }
        });

        this.setState({
            loading: false
        });
    }

    render() {
        //apply exit animation classes on state change
        var main_class = (this.state.open == true ? [] : ['case-study__animate-exit']);
        var container_class = (this.state.open == true ? [] : ['case-study__modal-container__animate-exit']);

        return <>
            <div className={Classes([[styles, ['case-study', 'case-study__animate-entry', ...main_class]]])}>
                <div className={Classes([[styles, ['case-study__modal-container', 'case-study__modal-container__animate-entry', ...container_class]]])}>
                    { this.state.loading ? (
                        <Loading/>
                    ) : (
                        <>
                            <img onClick={() => { this.close(); }} className={styles['case-study__close-btn']} src="/images/portfolio/close.png"/>
                            <div className={styles['case-study__modal-container__left']}>
                                <p className={styles['case-study__categories']}>Applications  <span className={styles['case-study__category-separator']}>•</span> School</p>
                                <p className={styles['case-study__title']}>{this.case_study.title}</p>
                                <ul className={styles['case-study__skills']}>
                                    <li className={styles['case-study__skill']}>Software Development</li>
                                    <li className={styles['case-study__skill']}>Ionic Framework</li>
                                    <li className={styles['case-study__skill']}>Angular</li>
                                </ul>
                                <p className={styles['case-study__status']}>Status: No longer maintained<br/>Last Developed: May, 2019</p>
                                <p className={styles['case-study__description']}>PackLife is a web application that any UNR guest can use to learn more about The University of Nevada, Reno and its services. PackLife provides users with event, transportation, dining, and amenities options available at the university in a fun and easy to use application.</p>
                            </div>
                            <div className={styles['case-study__modal-container__right']}>
                                <div className={Classes([[styles, ['case-study__story-item', '--left']]])}>
                                    <div className={Classes([[fancy, ['img-wrapper', 'large-img-wrapper', 'left', 'lg', 'iphone']]])}>
                                        <img className={fancy['img-src']} src="/images/portfolio/packlife/iphone-1.png"/>
                                        <img className={fancy['frame']} src="/images/portfolio/iphone.png"/>
                                    </div>
                                    <div className={styles['case-study__text-container']}>
                                        <p className={styles['case-study__text-title']}>Title</p>
                                        <p className={styles['case-study__text-content']}>While the map you see here is still in beta, PackLife will show the user a "fun" map of the university at launch.</p>
                                    </div>
                                </div>
                                <div className={Classes([[styles, ['case-study__story-item', '--right']]])}>
                                    <div className={Classes([[fancy, ['img-wrapper', 'large-img-wrapper', 'right', 'lg', 'iphone']]])}>
                                        <img className={fancy['img-src']} src="/images/portfolio/packlife/iphone-1.png"/>
                                        <img className={fancy['frame']} src="/images/portfolio/iphone.png"/>
                                    </div>
                                    <div className={styles['case-study__text-container']}>
                                        <p className={styles['case-study__text-title']}>Title</p>
                                        <p className={styles['case-study__text-content']}>While the map you see here is still in beta, PackLife will show the user a "fun" map of the university at launch.</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    }
}
