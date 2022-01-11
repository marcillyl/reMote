import Link from 'next/link';
import styles from '../styles/Navbar.module.css';
export default function Nav() {
  return (
    <nav className={styles.nav}>
      <Link href='/user'>
        <a className={styles.nav__link}>Profile</a>
      </Link>
      <Link href='/board'>
        <a className={styles.nav__link}>Board</a>
      </Link>
    </nav>
  );
}
