import styles from './header.module.css';
import igniteLogo from '../assets/ignite-logo.svg';

export function Header() {
  return(
    <header className={styles.Header}>
      <img src={igniteLogo} alt="Logo" />
      <strong >Ignite Feed</strong>
    </header>
  );
}