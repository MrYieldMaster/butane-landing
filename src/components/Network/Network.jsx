import React from 'react';
import styles from './Network.module.css';
import HeroImage from '../../assets/images/about-banner.png';

function Network() {
  return (
    <section className={styles.network}>
      <img src={HeroImage} alt="Hero" className={styles.heroImage} />
      <div className={styles.content}>
        <h2 className={styles.title}>
          The Butane Network
          <br />
          Home of the $BBC Token
        </h2>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <i className={`fa fa-cubes ${styles.icon}`} aria-hidden="true"></i>
            <p>23m+ Blocks Produced</p>
          </div>
          <div className={styles.stat}>
            <i className={`fa fa-exchange ${styles.icon}`} aria-hidden="true"></i>
            <p>5m+ Transactions Processed</p>
          </div>
          <div className={styles.stat}>
            <i className={`fa fa-address-book ${styles.icon}`} aria-hidden="true"></i>
            <p>184k+ Unique Wallets Created</p>
          </div>
        </div>
        <p className={styles.description}>
          The Butane Network is the original BBC-Core based blockchain and is a fully decentralized network run by 51 validators and an army of enthusiasts.
        </p>
        <a href="https://your-block-explorer-link.com" target="_blank" rel="noopener noreferrer" className={styles.blockExplorerBtn}>
          Block Explorer
        </a>
      </div>
    </section>
  );
}

export default Network;
