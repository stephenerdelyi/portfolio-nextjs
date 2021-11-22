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

    filter(event) {
        //set the state, then update the filter value based on the state
        this.setState({
            active_category: event.target.dataset.filter
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
                <div className={Classes([[styles, ['filterable-content__right', '--' + this.props.columns]]])}>
                    {React.Children.map(this.props.children, (child) => {
                        const categories = child.props.categories ?? [];
                        const hidden_class = (!categories.includes(this.state.active_category) ? ['--hidden'] : []);

                        return (
                            <div className={Classes([[styles, ['filterable-content__item', ...hidden_class]]])}>
                                {child}
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    }
}
