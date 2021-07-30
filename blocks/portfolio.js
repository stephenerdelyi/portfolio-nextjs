import React from 'react'
import Classes from '../functions/classes.js'
import FilterableContent from '../modules/filterable-content.js'
import CaseStudy from '../modules/case-study.js'
import styles from '../styles/blocks/portfolio.module.scss'
import fancy from '../styles/skeleton/fancy-images.module.scss'

export default class Portfolio extends React.Component {
    constructor(props) {
        super(props);

        this.categories = {
            'Select by Category': ['School', 'Work', 'Fun'],
            'Select by Type': ['Applications', 'Websites', 'Print']
        }

        this.default_category = 'work';

        this.state = {
            modal: null
        }
    }

    componentDidMount() {
        //this.open('123321');
    }

    open(id) {
        this.setState({
            modal: (<CaseStudy close={() => {this.close()}} id={id}></CaseStudy>)
        });
    }

    close() {
        this.setState({
            modal: null
        });
    }

    render() {
        return <>
            <div className={styles['block-portfolio']}>
                <h2 className={styles['block-portfolio__title']}>Portfolio</h2>

                <FilterableContent categories={this.categories} default_category={this.default_category} name="portfolio">
                    <div onClick={() => {this.open('123')}} className={Classes([[styles, ['block-portfolio__category-item']], [fancy, ['round-container']], ['js-portfolio-grid-item', 'work']])}>
                        <div className={Classes([[fancy, ['img-wrapper', 'center', 'iphone']]])}>
                            <img className={fancy['img-src']} src="/images/portfolio/packlife/iphone-1.png" alt="Packlife"/>
                            <img className={fancy['frame']} src="/images/portfolio/interface/iphone.png" alt=""/>
                        </div>
                        <div className={styles['block-portfolio__category-item__content']}>
                            <p className={styles['block-portfolio__category-item__title']}>Title Here</p>
                            <p className={styles['block-portfolio__category-item__view-text']}>Click to open</p>
                        </div>
                    </div>
                    <div className={Classes([[styles, ['block-portfolio__category-item']], [fancy, ['round-container']], ['js-portfolio-grid-item', 'work']])}>
                        <div className={Classes([[fancy, ['img-wrapper', 'center-full', 'pdf']]])}>
                            <img className={fancy['img-src']} src="/images/portfolio/dessert-night/pdf-1.jpeg" alt="Dessert Night"/>
                        </div>
                        <div className={styles['block-portfolio__category-item__content']}>
                            <p className={styles['block-portfolio__category-item__title']}>Title Here</p>
                            <p className={styles['block-portfolio__category-item__view-text']}>Click to open</p>
                        </div>
                    </div>
                    <div className={Classes([[styles, ['block-portfolio__category-item']], [fancy, ['round-container']], ['js-portfolio-grid-item', 'work']])}>
                        <div className={Classes([[fancy, ['img-wrapper', 'left', 'ipad-landscape']]])}>
                            <img className={fancy['img-src']} src="/images/portfolio/pack-pages/ipad-1.jpeg" alt="Pack Pages"/>
                            <img className={fancy['frame']} src="/images/portfolio/interface/ipad-landscape.png" alt=""/>
                        </div>
                        <div className={styles['block-portfolio__category-item__content']}>
                            <p className={styles['block-portfolio__category-item__title']}>Title Here</p>
                            <p className={styles['block-portfolio__category-item__view-text']}>Click to open</p>
                        </div>
                    </div>
                    <div className={Classes([[styles, ['block-portfolio__category-item']], [fancy, ['round-container']], ['js-portfolio-grid-item', 'work']])}>
                        <div className={Classes([[fancy, ['img-wrapper', 'center-full', 'ipad-portrait']]])}>
                            <img className={fancy['img-src']} src="/images/portfolio/test/ipad-test.jpeg" alt="iPad Test"/>
                            <img className={fancy['frame']} src="/images/portfolio/interface/ipad-portrait.png" alt=""/>
                        </div>
                        <div className={styles['block-portfolio__category-item__content']}>
                            <p className={styles['block-portfolio__category-item__title']}>Title Here</p>
                            <p className={styles['block-portfolio__category-item__view-text']}>Click to open</p>
                        </div>
                    </div>
                    <div className={Classes([[styles, ['block-portfolio__category-item']], [fancy, ['round-container']], ['js-portfolio-grid-item', 'school']])}>
                        <div className={Classes([[fancy, ['img-wrapper', 'center-full', 'macbook']]])}>
                            <img className={fancy['img-src']} src="/images/portfolio/test/mac-test.png" alt="MacBook Test"/>
                            <img className={fancy['frame']} src="/images/portfolio/interface/macbook.png" alt=""/>
                        </div>
                        <div className={styles['block-portfolio__category-item__content']}>
                            <p className={styles['block-portfolio__category-item__title']}>Title Here</p>
                            <p className={styles['block-portfolio__category-item__view-text']}>Click to open</p>
                        </div>
                    </div>
                    <div className={Classes([[styles, ['block-portfolio__category-item']], [fancy, ['round-container']], ['js-portfolio-grid-item', 'school']])}>
                        <div className={Classes([[fancy, ['img-wrapper', 'center-full', 'imac']]])}>
                            <img className={fancy['img-src']} src="/images/portfolio/test/mac-test.png" alt="MacBook Test"/>
                            <img className={fancy['frame']} src="/images/portfolio/interface/imac.png" alt=""/>
                        </div>
                        <div className={styles['block-portfolio__category-item__content']}>
                            <p className={styles['block-portfolio__category-item__title']}>Title Here</p>
                            <p className={styles['block-portfolio__category-item__view-text']}>Click to open</p>
                        </div>
                    </div>
                </FilterableContent>
                {this.state.modal}
            </div>
        </>
    }
}
