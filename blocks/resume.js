import Classes from '../functions/classes.js'
import FilterableContent from '../modules/filterable-content.js'
import styles from '../styles/blocks/resume.module.scss'

export default function Resume(props) {
    var fields = props.data.fields

    var categories = {
        '': fields.types
    }

    var default_category = fields.default_selection;

    return <>
        <div className={styles['block-resume']}>
            <h2 className={styles['block-resume__title']}>Résumé</h2>

            <FilterableContent categories={categories} default_category={default_category} name="resume">
                {fields.items.map((item, key) => {
                    return (
                        <div key={key} className={Classes([[styles, ['block-resume__category-item']], ['js-resume-grid-item', ...item.types]])}>
                            <img className={styles['block-resume__category-item__image']} src={item.image} alt={item.title}/>
                            <div className={styles['block-resume__category-item__content']}>
                                <h3 className={styles['block-resume__category-item__title']}>{item.title}</h3>
                                <p className={styles['block-resume__category-item__subtitle']}>{item.subtitle}</p>
                                <p className={styles['block-resume__category-item__dates']}>{item.date_label}</p>
                                {item.tags &&
                                    <ul className={styles['block-resume__category-item__skills']}>
                                        {item.tags.map((tag, key) => {
                                            return (
                                                <li key={key} className={styles['block-resume__category-item__skill']}>{tag}</li>
                                            )
                                        })}
                                    </ul>
                                }
                                {item.text_content &&
                                    <p className={styles['block-resume__category-item__description']}>{item.text_content}</p>
                                }
                            </div>
                        </div>
                    )
                })}
            </FilterableContent>
        </div>
    </>
}
