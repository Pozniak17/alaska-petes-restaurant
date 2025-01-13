import styles from './page.module.css';
import Container from './shared/Container/Container';

export interface HomeProps {}

export default function Home() {
  return (
    <header>
      <Container>
        <nav className={styles['header-nav']}>
          <li className={styles['header-list']}>
            <p className={styles['header-link']}>Hello</p>
          </li>
          <li className={styles['header-list']}>
            <p className={styles['header-link']}>Menu</p>
          </li>
          <li className={styles['header-list']}>
            <p className={styles['header-link']}>Gallery</p>
          </li>
          <li className={styles['header-list']}>
            <p className={styles['header-link']}>Reservations</p>
          </li>
          <li className={styles['header-list']}>
            <p className={styles['header-link']}>About</p>
          </li>
        </nav>
      </Container>
    </header>
  );
}
