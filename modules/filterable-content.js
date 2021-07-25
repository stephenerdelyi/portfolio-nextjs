import React from 'react'
import Classes from '../functions/classes.js'
import styles from '../styles/skeleton/filterable-content.module.scss'

export default class FilterableContent extends React.Component {
    constructor(props) {
        super();
    }

    componentDidMount() {
        //initialize isotope
        this.isotope = new Isotope(document.querySelector('.js-' + this.props.name + '-grid'), {
            itemSelector: '.js-' + this.props.name + '-grid-item',
        });

        //tell isotope to filter to default category
        this.isotope.arrange({
            filter: '.' + this.props.default_category
        });

        //set the active class on the current category
        document.querySelectorAll('.js-' + this.props.name + '-categories').forEach((category_set) => {
            category_set.childNodes.forEach((category) => {
                if(category.dataset.filter == this.props.default_category) {
                    category.classList.add(styles['--active']);
                }
            })
        });
    }

    filter(event) {
        //tell isotope to filter to the newly selected item
        this.isotope.arrange({
            filter: '.' + event.target.dataset.filter
        });

        //set the active class on the current category
        document.querySelectorAll('.js-' + this.props.name + '-categories').forEach((category_set) => {
            category_set.childNodes.forEach((category) => {
                category.classList.remove(styles['--active']);

                if(category.dataset.filter == event.target.dataset.filter) {
                    category.classList.add(styles['--active']);
                }
            })
        });
    }

    render() {
        return <>
            <div className={styles['filterable-content__category-container']}>
                <div className={styles['filterable-content__left']}>
                    {Object.keys(this.props.categories).map((label, key) => {
                        return (
                            <div key={key}>
                                {label.length > 0 &&
                                    <p className={styles['filterable-content__category-label']}>{label}</p>
                                }
                                <ul className={Classes([[styles, ['filterable-content__category-selector']], ['js-' + this.props.name + '-categories']])}>
                                    {this.props.categories[label].map((category, key) => {
                                        return (
                                            <li key={key} className={styles['filterable-content__category']} onClick={(e) => { this.filter(e) }} data-filter={category.replace(/\s/ig, '-').toLowerCase()}>{category}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                        )
                    })}
                </div>
                <div className={Classes([[styles, ['filterable-content__right']], ['js-' + this.props.name + '-grid']])}>
                    {this.props.children}
                </div>
            </div>
        </>
    }
}
