import React from 'react'
import Classes from '../functions/classes.js'
import styles from '../styles/skeleton/filterable-content.module.scss'

export default class FilterableContent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            active_category: this.props.default_category
        }
    }

    componentDidMount() {
        //initialize isotope
        this.isotope = new Isotope(document.querySelector('.js-' + this.props.name + '-grid'), {
            itemSelector: '.js-' + this.props.name + '-grid-item',
            filter: '.' + this.state.active_category
        });

        //annoying but this fixes the isotope layout bug seen on render
        setTimeout(() => {
            this.isotope.arrange({
                filter: '.' + this.state.active_category
            });
        }, 500);
    }

    filter(event) {
        //set the state, then update the filter value based on the state
        this.setState({
            active_category: event.target.dataset.filter
        }, () => {
            //tell isotope to filter to the newly selected item
            this.isotope.arrange({
                filter: '.' + this.state.active_category
            });
        });
    }

    render() {
        return <>
            <div className={Classes([[styles, ['filterable-content__category-container', '--' + this.props.name]]])}>
                <div className={styles['filterable-content__left']}>
                    {Object.keys(this.props.categories).map((label, key) => {
                        return (
                            <div key={key}>
                                {label.length > 0 &&
                                    <p className={styles['filterable-content__category-label']}>{label}</p>
                                }
                                <ul className={Classes([[styles, ['filterable-content__category-selector']]])}>
                                    {this.props.categories[label].map((category, key) => {
                                        let active_class = (this.state.active_category == category.slug ? ['--active'] : []);
                                        return (
                                            <li key={key} className={Classes([[styles, ['filterable-content__category', ...active_class]]])} onClick={(e) => { this.filter(e) }} data-filter={category.slug}>{category.name}</li>
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
