import Link from 'next/link';
import Image from 'next/image';
import styles from './AppBar.module.css';
import logo from '../../../../public/icons/logo.svg';
import menu from '../../../../public/icons/menu.svg';
import arrow from '../../../../public/icons/down-arrow.svg';
import phone from '../../../../public/icons/call-ringing.svg';

export default function AppBar() {
  return (
    <div className={styles['header-wrapper']}>
      <div className={styles['logo-wrapper']}>
        <Image src={menu} loading="eager" alt="Menu" className={styles.menu} />

        <div className={styles.title_wrapper}>
          <Image
            src={logo}
            loading="eager"
            alt="logo of Alaska Pete's restaurant"
          />
          <h1 className={styles['logo-header']}>Alaska Pete’s</h1>
        </div>
      </div>

      <nav className={styles['header-nav']}>
        <li className={styles['header-list']}>
          <Link href={'/'} className={styles['header-link']}>
            Hello
          </Link>
        </li>
        <li className={styles['header-list']}>
          <Link href={'/menu'} className={styles['header-link']}>
            Menu
          </Link>
        </li>
        <li className={styles['header-list']}>
          <Link href={'/gallery'} className={styles['header-link']}>
            Gallery
          </Link>
        </li>
        <li className={styles['header-list']}>
          <Link href={'/reservations'} className={styles['header-link']}>
            Reservations
          </Link>
        </li>
        <li className={styles['header-list']}>
          <Link href={'/about'} className={styles['header-link']}>
            About
          </Link>
        </li>
      </nav>

      <div className={styles.connect}>
        <div className={styles.language}>
          <Image src={arrow} loading="eager" alt="down arrow" />
          <p className={styles.language_text}>UA</p>
        </div>

        <div className={styles.phone}>
          <a href="tel:5702238575">
            <Image src={phone} loading="eager" alt="phone connect" />
            {/* <span className={styles.number}>(570) 223-8575</span> */}
          </a>
        </div>
      </div>
    </div>
  );
}
