import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/" className={styles.navLink}>
              home
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/faq" className={styles.navLink}>
              faq
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/hotel" className={styles.navLink}>
              hotel
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;