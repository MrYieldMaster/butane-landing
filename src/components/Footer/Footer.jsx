import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>
        &copy; {new Date().getFullYear()} Butane Network. All rights reserved.
      </div>
      <div className={styles.socialicon}>
        <a href="https://twitter.com/Butane_Network" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
          <i className="fa fa-twitter" aria-hidden="true"></i>
        </a>
        <a href="https://medium.com/@butanegas101" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
          <i className="fa fa-medium" aria-hidden="true"></i>
        </a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
          <i className="fa fa-github" aria-hidden="true"></i>
        </a>
        <a href="https://t.me/butanechain" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
          <i className="fa fa-telegram" aria-hidden="true"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
