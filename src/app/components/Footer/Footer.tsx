import Image from 'next/image';
import styles from './Footer.module.css';
import map from '../../../../public/icons/footer/map.svg';
import mail from '../../../../public/icons/footer/mail.svg';
import phone from '../../../../public/icons/footer/ring.svg';
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
        <div className={styles.main_wrapper}>
          <div className={styles.first_wrapper}>
            <div className={styles.address_wrapper}>
              <Image src={map} alt="map icon" />
              <ul className={styles.address_list}>
                <li>
                  <p>Alaska Pete&apos;s, USA 151 Seven Bridge Road</p>
                </li>
                <li>
                  <p>Marshalls Creek, PA 18335</p>
                </li>
              </ul>
            </div>

            <div className={styles.contact_wrapper}>
              <ul className={styles.contact_list}>
                <li className={styles.contact_item}>
                  <Image
                    src={mail}
                    alt="@mail icon"
                    className={styles.contact_icon}
                  />
                  <p className={styles.contact_text}>destination@gmail.com</p>
                </li>

                <li className={styles.contact_item}>
                  <Image src={phone} alt="phone number" />
                  <p className={styles.contact_text}>(570) 223-8575</p>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.second_wrapper}>
            <div className={styles.hours_container}>
              <Image src={clock} alt="clock icon" />
              <ul className={styles.hours_list}>
                <li>
                  <p>Open Hours</p>
                </li>
                <li>
                  <p>Mon - Sun: 12am - 12am</p>
                </li>
              </ul>
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

          <div className={styles.logo}>
            <Image src={logo} alt="logo" /> Alaska Pete’s
          </div>
        </div>
        <div className={styles.copyright}>
          CatCodeStudio @ 2025. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
