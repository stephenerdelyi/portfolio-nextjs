import React from 'react'
import Classes from '../functions/classes.js'
import debounce from '../functions/debounce.js'
import styles from '../styles/skeleton/filterable-content.module.scss'

export default class FilterableContent extends React.Component {
    constructor(props) {
        super(props);

        this.item_container = React.createRef();
        this.items = [];

        this.state = {
            active_category: this.props.default_category
        }

        React.Children.map(this.props.children, (child) => {
            this.items.push(React.createRef());
        });
    }

    filter(event) {
        //set the state, then update the filter value based on the state
        this.items.map((item, key) => {
            item.current.style.top = '0px';

            if(item.current.style.right) {
                item.current.style.right = '50%';
            }
        });

        this.setState({
            active_category: event.target.dataset.filter
        }, () => {
            this.resize();
        });
    }

    resize() {
        //handle resize logic
        let current_height = 0;
        let visible_items = [];

        //find visible items
        this.items.map((item, key) => {
            if(item.current.classList.contains(styles['--shown'])) {
                visible_items.push(item.current);
            }
        });

        //loop through and position accordingly
        visible_items.map((item, key) => {
            item.classList.add(styles['--delay-' + key])
            if(this.props.columns == 'two-columns' && window.innerWidth > 415) {
                if(key % 2 == 0) {
                    item.style.top = current_height + 'px';
                    item.style.left = '0px';
                    item.style.right = 'unset';

                    if(key + 1 == visible_items.length) {
                        current_height += item.clientHeight;
                    }
                } else {
                    item.style.top = current_height + 'px';
                    item.style.left = 'unset';
                    item.style.right = '0px';
                    current_height += item.clientHeight;
                }
            } else {
                item.style.top = current_height + 'px';
                current_height += item.clientHeight;
            }

            item.style.zIndex = visible_items.length - key;
        });

        if(this.item_container.current) {
            this.item_container.current.style.minHeight = current_height + 'px';
        }
    }

    componentDidMount() {
        this.resize();
        window.addEventListener('resize', debounce(() => { this.resize(); }, 2000));
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
                <div ref={this.item_container} className={Classes([[styles, ['filterable-content__right', '--' + this.props.columns]]])}>
                    {React.Children.map(this.props.children, (child, key) => {
                        const categories = child.props.categories ?? [];
                        const active_class = (categories.includes(this.state.active_category) ? ['--shown'] : []);

                        return (
                            <div ref={this.items[key]} className={Classes([[styles, ['filterable-content__item', ...active_class]]])}>
                                {child}
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    }
}
