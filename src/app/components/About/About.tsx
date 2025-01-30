import Image from 'next/image';
import styles from './About.module.css';
import chef from '../../../../public/image/About/about.jpg';

export default function About() {
  return (
    <section className={styles.about}>
      <h2 className={styles.title}>Meet the Chief</h2>
      <div className={styles.wrapper}>
        <div className={styles.first_wrapper}>
          <div>
            <Image src={chef} alt="chef's photo" className={styles.image} />
          </div>

          <div className={styles.about_wrapper}>
            <h3 className={styles.about_name}>Alice Waters</h3>
            <p className={styles.about_text}>
              Alice Waters is a celebrated American chef, restaurateur, author,
              and activist known for her dedication to sustainable, locally
              sourced food. She founded Chez Panisse, a famed Berkeley
              restaurant that embodies the farm-to-table philosophy. Waters
              emphasizes fresh, organic ingredients from local producers who
              prioritize environmental care, transforming how people think about
              food and its connection to the environment.
            </p>

            <button className={styles.about_button}>View More</button>
          </div>
        </div>

        <ul className={styles.block_wrapper}>
          <li className={styles.block}>
            <p className={styles.block_title}>10+</p>
            <p className={styles.block_text}>Experience</p>
          </li>

          <li className={styles.block}>
            <p className={styles.block_title}>20+</p>
            <p className={styles.block_text}>Awards & Certificate</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
