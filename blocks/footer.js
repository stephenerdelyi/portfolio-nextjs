import styles from '../styles/blocks/footer.module.scss'

export default function Footer() {
    var today = new Date();
    var year = today.getFullYear();

    return <>
        <div className={styles['block-footer']}>
        	<p className={styles['block-footer__text']}>&copy; {year} Steve Erdelyi Jr. All Rights Reserved.</p>
        </div>
    </>
}
