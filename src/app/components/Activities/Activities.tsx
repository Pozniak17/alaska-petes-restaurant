import Image from 'next/image';
import styles from './Activities.module.css';
import img from '../../../../public/image/Activities/strawberry.jpg';

export default function Activities() {
  return (
    <section className={styles.activities}>
      <h2 className={styles.title}>What’s Happening?</h2>
      <Image src={img} alt="strawberry in cup" className={styles.image} />
      <div className={styles.activities_wrapper}>
        <h3 className={styles.activities_title}>Culinary workshop</h3>

        <div className={styles.activities_block}>
          <span className={styles.activities_date}>24.12.24</span>
          <p className={styles.activities_text}>
            Learn the art of making Tomahawk ribeye steak.
          </p>
        </div>

        <ul className={styles.button_list}>
          <li>
            <button className={styles.activities_button}>View More</button>
          </li>
          <li>
            <button className={styles.activities_button}>Book Now</button>
          </li>
        </ul>
      </div>

      <div className={styles.activities_wrapper}>
        <h3 className={styles.activities_title}>Wine Testing</h3>

        <div className={styles.activities_block}>
          <span className={styles.activities_date}>24.12.24</span>
          <p className={styles.activities_text}>
            A delightful wine-tasting experience on the terrace.
          </p>
        </div>

        <ul className={styles.button_list}>
          <li>
            <button className={styles.activities_button}>View More</button>
          </li>
          <li>
            <button className={styles.activities_button}>Book Now</button>
          </li>
        </ul>
      </div>

      <div className={styles.activities_wrapper}>
        <h3 className={styles.activities_title}>Children’s Party</h3>

        <div className={styles.activities_block}>
          <span className={styles.activities_date}>24.12.24</span>
          <p className={styles.activities_text}>
            Learn the art of making Tomahawk ribeye steak.
          </p>
        </div>

        <ul className={styles.button_list}>
          <li>
            <button className={styles.activities_button}>View More</button>
          </li>
          <li>
            <button className={styles.activities_button}>Book Now</button>
          </li>
        </ul>
      </div>
    </section>
  );
}
