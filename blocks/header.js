import styles from '../styles/blocks/header.module.scss'
import Image from 'next/image'

export default function Header() {
    return <>
        <div className={styles['block-header']}>
            <div className={styles['block-header__left']}>
                <div className={styles['block-header__dev-window']}>
					<div className={styles['block-header__dev-window__menu-bar']}>
                        <div className={styles['block-header__dev-window__menu-btn']}><Image priority src="/images/header/red.svg" height={15} width={15} alt=""/></div>
                        <div className={styles['block-header__dev-window__menu-btn']}><Image priority src="/images/header/yellow.svg" height={15} width={15} alt=""/></div>
                        <div className={styles['block-header__dev-window__menu-btn']}><Image priority src="/images/header/green.svg" height={15} width={15} alt=""/></div>
					</div>
					<div className={styles['block-header__dev-window__content-area']}>
						<ul className={styles['block-header__dev-window__query-list']}>
							<li className={styles['block-header__dev-window__query']}>Steve</li>
							<li className={styles['block-header__dev-window__response']}>&#123;<span className={styles['block-header__dev-window__color-green']}>Developer</span>&#125;</li>
							<li className={styles['block-header__dev-window__query']}>Steve.phone</li>
							<li className={styles['block-header__dev-window__response']}><span className={styles['block-header__dev-window__color-link']}><a href="tel:7755152318">775.515.2318</a></span></li>
							<li className={styles['block-header__dev-window__query']}>Steve.interests</li>
							<li className={styles['block-header__dev-window__response']}>[<span className={styles['block-header__dev-window__color-orange']}>"Disney"</span>, <span className={styles['block-header__dev-window__color-orange']}>"Tesla"</span>, <span className={styles['block-header__dev-window__color-orange']}>"Apple"</span>]</li>
						</ul>
					</div>
					<div className={styles['block-header__dev-window__input-area']}>
                        <div className={styles['block-header__dev-window__input-arrow']}></div>
						{/*<span className={styles['block-header__dev-window__input-container']}><mark><div className={styles['block-header__dev-window__cursor']}>*</div></mark></span>*/}
					</div>
				</div>
            </div>
            <div className={styles['block-header__right']}>
                <div className={styles['block-header__intro']}>
                    <h1 className={styles['block-header__intro__title']}>Hello, I'm<br/>Steve Erdelyi</h1>
                    <p className={styles['block-header__intro__position']}>Web Developer</p>
                    <a href="#portfolio" className={styles['block-header__intro__button']}>View Portfolio</a>
                </div>
            </div>
        </div>
    </>
}
