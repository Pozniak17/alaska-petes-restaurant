'use client';
import Slider from '@/app/shared/Slider/Slider';
import styles from './Events.module.css';

export default function Events() {
  return (
    <section className={styles.events}>
      <h2 className={styles.events_title}>Explore Our Offerings</h2>
      <p className={styles.events_text}>
        Discover our unique services, innovative concepts, and passion for
        excellence.
      </p>
      <Slider />
    </section>
  );
}
