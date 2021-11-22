import React from 'react'
import Classes from '../functions/classes.js'
import FilterableContent from '../modules/filterable-content.js'
import CaseStudy from '../modules/case-study.js'
import styles from '../styles/blocks/portfolio.module.scss'
import fancy from '../styles/skeleton/fancy-images.module.scss'

export default class Portfolio extends React.Component {
    constructor(props) {
        super(props);

        this.fields = props.data.fields;

        this.categories = {
            [this.fields.category_label]: this.fields.categories,
            [this.fields.type_label]: this.fields.types
        }

        this.default_category = this.fields.default_selection;

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

        //don't allow scrolling behind the modal when open + don't jump scroll position when opening
        let savedScrollY = window.scrollY;
        document.body.style.position = 'fixed';
        document.body.style.top = `-${savedScrollY}px`;
    }

    close() {
        this.setState({
            modal: null
        });

        //remove styles to disallow scrolling behind the modal when open + don't jump scroll position when closing
        let savedScrollY = document.body.style.top;
        document.body.style.position = '';
        document.body.style.top = '';
        window.scrollTo(0, parseInt(savedScrollY || '0') * -1);
    }

    render() {
        return <>
            <div className={styles['block-portfolio']}>
                <h2 className={styles['block-portfolio__title']}>{this.fields.title}</h2>

                <FilterableContent categories={this.categories} default_category={this.default_category} name="portfolio">
                    {this.fields.items.map((item, key) => {
                        return (
                            <div key={key} onClick={() => {this.open(item.id)}} className={Classes([[styles, ['block-portfolio__category-item']], [fancy, ['round-container']], ['js-portfolio-grid-item', ...item.types, ...item.categories]])}>
                                <div className={Classes([[fancy, ['img-wrapper', item.image_type, item.image_position]]])}>
                                    <img className={fancy['img-src']} src={item.image} alt={item.title}/>
                                    {item.image_type != 'pdf' &&
                                        <img className={fancy['frame']} src={'/images/portfolio/' + item.image_type + '.png'} alt=""/>
                                    }
                                </div>
                                <div className={styles['block-portfolio__category-item__content']}>
                                    <p className={styles['block-portfolio__category-item__title']}>{item.title}</p>
                                    <p className={styles['block-portfolio__category-item__view-text']}>Click to open</p>
                                </div>
                            </div>
                        )
                    })}
                </FilterableContent>
                {this.state.modal}
            </div>
        </>
    }
}
