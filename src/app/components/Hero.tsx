import Image from 'next/image';
import styles from '../page.module.css';
import img from '../../../public/image/hero-picture.jpg';
import heroIcon from '../../../public/icons/hero.svg';
export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.hero_title}>Welcome to our Restaurant,</h1>
      <div className={styles.hero_wrapper}>
        <p className={styles.hero_text}>
          Step into our kitchen, where every guest is treated like family and
          every meal feels like home.
        </p>

        <button className={styles.hero_button}>Reserve</button>
        <Image src={heroIcon} alt="shampayne" className={styles.hero_icon} />
      </div>
      <Image src={img} alt="food" className={styles.hero_image} />
    </section>
  );
}
