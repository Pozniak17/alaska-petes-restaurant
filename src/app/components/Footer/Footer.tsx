import Image from 'next/image';
import styles from './Footer.module.css';
import map from '../../../../public/icons/footer/map.svg';
import mail from '../../../../public/icons/footer/mail.svg';
import ring from '../../../../public/icons/footer/ring.svg';
import clock from '../../../../public/icons/footer/clock.svg';
import telegram from '../../../../public/icons/footer/telegram.svg';
import facebook from '../../../../public/icons/footer/facebook.svg';
import youtube from '../../../../public/icons/footer/youtube.svg';
import instagram from '../../../../public/icons/footer/instagram.svg';
import logo from '../../../../public/icons/footer/logo.svg';
import Container from '@/app/shared/Container/Container';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footer_wrapper}>
          <Image src={map} alt="map icon" />
          <div className={styles.footer_address}>
            <p className={styles.footer_text}>
              Alaska Pete&apos;s, USA 151 Seven Bridge Road
            </p>
            <p className={styles.footer_text}>Marshalls Creek, PA 18335</p>
          </div>
        </div>

        <div className={styles.contact_wrapper}>
          <div className={styles.footer_wrapper}>
            <a href="mailto:destination@gmail.com" className={styles.link}>
              <Image src={mail} alt="map icon" className={styles.icon} />
              <span className={styles.link_text}>destination@gmail.com</span>
            </a>
          </div>

          <div className={styles.footer_wrapper}>
            <a href="telto:(570) 223-8575" className={styles.link}>
              <Image src={ring} alt="phone icon" />
              <span className={styles.link_text}>(570) 223-8575</span>
            </a>
          </div>
        </div>

        <div className={styles.hours_wrapper}>
          <Image src={clock} alt="clock icon" className={styles.icon} />
          <div>
            <p className={styles.footer_text}>Open Hours</p>
            <p className={styles.footer_text}>Mon - Sun: 12am - 12am</p>
          </div>

          <ul className={styles.icon_list}>
            <li>
              <Image src={telegram} alt="telegram icon" />
            </li>
            <li>
              <Image src={facebook} alt="facebook icon" />
            </li>
            <li>
              <Image src={youtube} alt="youtube icon" />
            </li>
            <li>
              <Image src={instagram} alt="instagram icon" />
            </li>
          </ul>
        </div>

        <div className={styles.footer_logo}>
          <Image src={logo} alt="logo icon" />
          <h3>Alaska Pete’s</h3>
        </div>

        <p className={`${styles.footer_text} ${styles.coopyrigth}`}>
          CatCodeStudio @ 2025. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
