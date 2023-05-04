import React from 'react';
import styles from './Header.module.css';
import logo from  '../../assets/images/flame.png';


function Header() {
    return (
      <header className={styles.header}>
        <img src={logo} alt="Butane Network" className={styles.logo} />
        <nav className={styles.navLinks}>
          <a href="#wallet" className={styles.navItem}>
            Wallet
          </a>
          <a href="#explorer" className={styles.navItem}>
            Explorer
          </a>
          <a href="#exchanges" className={styles.navItem}>
            Exchanges
          </a>
          <a
            href="https://t.me/butanechain"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.navItem} ${styles.telegramIcon}`}
          >
            <i className="fa fa-telegram" aria-hidden="true"></i>
          </a>
        </nav>
      </header>
    );
  }
  
  export default Header;