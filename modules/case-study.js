import React from 'react'
import Loading from './loading.js'
import Classes from '../functions/classes.js'
import styles from '../styles/skeleton/case-study.module.scss'
import fancy from '../styles/skeleton/fancy-images.module.scss'

export default class CaseStudy extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            open: true,
            loading: true
        }
    }

    componentDidMount() {
        this.getCaseStudy();
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
        const response = await fetch(process.env.NEXT_PUBLIC_ENDPOINT_ADMIN + '/case-study/' + this.props.id, {
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
        let main_class = (this.state.open == true ? [] : ['case-study__animate-exit']);
        let container_class = (this.state.open == true ? [] : ['case-study__modal-container__animate-exit']);

        return <>
            <div className={Classes([[styles, ['case-study', 'case-study__animate-entry', ...main_class]]])}>
                <div className={Classes([[styles, ['case-study__modal-container', 'case-study__modal-container__animate-entry', ...container_class]]])}>
                    { this.state.loading ? (
                        <Loading/>
                    ) : (
                        <>
                            <img onClick={() => { this.close(); }} className={styles['case-study__close-btn']} src="/images/portfolio/close.png"/>
                            <div className={styles['case-study__modal-container__left']}>
                                <p className={styles['case-study__categories']}>{this.case_study.type} <span className={styles['case-study__category-separator']}>•</span> {this.case_study.category}</p>
                                <p className={styles['case-study__title']}>{this.case_study.title}</p>
                                { this.case_study.tags &&
                                    <ul className={styles['case-study__skills']}>
                                        { this.case_study.tags.map((tag, key) => {
                                            return (
                                                <li key={key} className={styles['case-study__skill']}>{tag}</li>
                                            )
                                        }) }
                                    </ul>
                                }
                                { this.case_study.links && this.case_study.links.map((link, key) => {
                                    return (
                                        <a key={key} href={link.url} className={styles['case-study__link']} target={link.target}>{link.title}</a>
                                    )
                                })}
                                <p className={styles['case-study__status']}>Status: {this.case_study.status.label}<br/>Last Developed: {this.case_study.last_developed}</p>
                                { this.case_study.description &&
                                    <p className={styles['case-study__description']}>{this.case_study.description}</p>
                                }
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
