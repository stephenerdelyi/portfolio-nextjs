import Classes from '../functions/classes.js'
import FilterableContent from '../modules/filterable-content.js'
import styles from '../styles/blocks/resume.module.scss'

export default function Resume() {
    var categories = {
        '': ['Experience', 'Education', 'Activities', 'Skills']
    }

    var default_category = 'experience';

    return <>
        <div className={styles['block-resume']}>
            <h2 className={styles['block-resume__title']}>Résumé</h2>

            <FilterableContent categories={categories} default_category={default_category} name="resume">
                <div className={Classes([[styles, ['block-resume__category-item']], ['js-resume-grid-item', 'experience']])}>
                    <img className={styles['block-resume__category-item__image']} src="/images/resume/noble.png" alt="Noble Studios"/>
                    <div className={styles['block-resume__category-item__content']}>
                        <h3 className={styles['block-resume__category-item__title']}>Employer</h3>
                        <p className={styles['block-resume__category-item__subtitle']}>Title</p>
                        <p className={styles['block-resume__category-item__dates']}>Start - End</p>
                        <ul className={styles['block-resume__category-item__skills']}>
                            <li className={styles['block-resume__category-item__skill']}>Skill</li>
                        </ul>
                        {/*<p className={styles['block-resume__category-item__description']}>{{experienceItem.description}}</p>*/}
                    </div>
                </div>
                <div className={Classes([[styles, ['block-resume__category-item']], ['js-resume-grid-item', 'education']])}>
                    <img className={styles['block-resume__category-item__image']} src="/images/resume/aaf.png" alt="AAF Reno"/>
                    <div className={styles['block-resume__category-item__content']}>
                        <h3 className={styles['block-resume__category-item__title']}>Employer</h3>
                        <p className={styles['block-resume__category-item__subtitle']}>Title</p>
                        <p className={styles['block-resume__category-item__dates']}>Start - End</p>
                        <ul className={styles['block-resume__category-item__skills']}>
                            <li className={styles['block-resume__category-item__skill']}>Skill</li>
                        </ul>
                        {/*<p className={styles['block-resume__category-item__description']}>{{experienceItem.description}}</p>*/}
                    </div>
                </div>
                <div className={Classes([[styles, ['block-resume__category-item']], ['js-resume-grid-item', 'activities']])}>
                    <img className={styles['block-resume__category-item__image']} src="/images/resume/ieee.png" alt="IEEE"/>
                    <div className={styles['block-resume__category-item__content']}>
                        <h3 className={styles['block-resume__category-item__title']}>Employer</h3>
                        <p className={styles['block-resume__category-item__subtitle']}>Title</p>
                        <p className={styles['block-resume__category-item__dates']}>Start - End</p>
                        <ul className={styles['block-resume__category-item__skills']}>
                            <li className={styles['block-resume__category-item__skill']}>Skill</li>
                        </ul>
                        {/*<p className={styles['block-resume__category-item__description']}>{{experienceItem.description}}</p>*/}
                    </div>
                </div>
            </FilterableContent>
        </div>
    </>
}
