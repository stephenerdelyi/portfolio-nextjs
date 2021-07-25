import Classes from '../functions/classes.js'
import FilterableContent from '../modules/filterable-content.js'
import styles from '../styles/blocks/portfolio.module.scss'

export default function Portfolio() {
    var categories = {
        'Select by Category': ['School', 'Work', 'Fun'],
        'Select by Type': ['Applications', 'Websites', 'Print']
    }

    var default_category = 'work';

    return <>
        <div className={styles['block-portfolio']}>
            <h2 className={styles['block-portfolio__title']}>Portfolio</h2>

            <FilterableContent categories={categories} default_category={default_category} name="portfolio">
                <div className={Classes([[styles, ['block-portfolio__category-item']], ['js-portfolio-grid-item', 'work']])}>
                    <img className={styles['block-portfolio__category-item__image']} src="/images/resume/noble.png" alt="Noble Studios"/>
                    <div className={styles['block-portfolio__category-item__content']}>
                        <h3 className={styles['block-portfolio__category-item__title']}>Employer</h3>
                        <p className={styles['block-portfolio__category-item__subtitle']}>Title</p>
                        <p className={styles['block-portfolio__category-item__dates']}>Start - End</p>
                        <ul className={styles['block-portfolio__category-item__skills']}>
                            <li className={styles['block-portfolio__category-item__skill']}>Skill</li>
                        </ul>
                        {/*<p className={styles['block-portfolio__category-item__description']}>{{experienceItem.description}}</p>*/}
                    </div>
                </div>
                <div className={Classes([[styles, ['block-portfolio__category-item']], ['js-portfolio-grid-item', 'fun']])}>
                    <img className={styles['block-portfolio__category-item__image']} src="/images/resume/aaf.png" alt="AAF Reno"/>
                    <div className={styles['block-portfolio__category-item__content']}>
                        <h3 className={styles['block-portfolio__category-item__title']}>Employer</h3>
                        <p className={styles['block-portfolio__category-item__subtitle']}>Title</p>
                        <p className={styles['block-portfolio__category-item__dates']}>Start - End</p>
                        <ul className={styles['block-portfolio__category-item__skills']}>
                            <li className={styles['block-portfolio__category-item__skill']}>Skill</li>
                        </ul>
                        {/*<p className={styles['block-portfolio__category-item__description']}>{{experienceItem.description}}</p>*/}
                    </div>
                </div>
                <div className={Classes([[styles, ['block-portfolio__category-item']], ['js-portfolio-grid-item', 'school']])}>
                    <img className={styles['block-portfolio__category-item__image']} src="/images/resume/ieee.png" alt="IEEE"/>
                    <div className={styles['block-portfolio__category-item__content']}>
                        <h3 className={styles['block-portfolio__category-item__title']}>Employer</h3>
                        <p className={styles['block-portfolio__category-item__subtitle']}>Title</p>
                        <p className={styles['block-portfolio__category-item__dates']}>Start - End</p>
                        <ul className={styles['block-portfolio__category-item__skills']}>
                            <li className={styles['block-portfolio__category-item__skill']}>Skill</li>
                        </ul>
                        {/*<p className={styles['block-portfolio__category-item__description']}>{{experienceItem.description}}</p>*/}
                    </div>
                </div>
            </FilterableContent>
        </div>
    </>
}
