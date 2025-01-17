import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import Container from './shared/Container/Container';
import logo from '../../public/icons/logo.svg';
import arrow from '../../public/icons/down-arrow.svg';
import phone from '../../public/icons/call-ringing.svg';

export default function Home() {
  return (
    <header>
      <Container>
        <div className={styles['header-wrapper']}>
          <div className={styles['logo-wrapper']}>
            <Image
              src={logo}
              loading="eager"
              alt="logo of Alaska Pete's restaurant"
            />
            <h1 className={styles['logo-header']}>Alaska Pete’s</h1>
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
              <a href="tel:5702238575" className={styles.phone_link}>
                <Image src={phone} loading="eager" alt={'phone connect'} />
                <span className={styles.number}>(570) 223-8575</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
