import styles from '../styles/blocks/about.module.scss'

export default function About() {
    return <>
        <div className={styles['block-about']}>
            <h2 className={styles['block-about__title']}>About</h2>
        	<h3 className={styles['block-about__subtitle']}>Making beautiful websites is my passion</h3>
        	<p className={styles['block-about__text']}>No, seriously! I have been creating websites since I built my first web development server in 5<sup>th</sup> grade. Read more about me and my programming adventures below.</p>
        </div>
    </>
}
