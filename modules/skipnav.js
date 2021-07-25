import styles from '../styles/skeleton/skipnav.module.scss'

export default function Skipnav() {
    return <>
        <div className={styles['skipnav']} aria-label="Skip Navigation" role="navigation">
            <a className={styles['skipnav__link']} href="#about"><p className={styles['skipnav__text']}>Skip to main content</p></a>
        </div>
    </>
}
