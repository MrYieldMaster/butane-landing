import React from 'react';
import styles from './WhereToBuy.module.css';
import HeroImage from '../../assets/images/hero-banner.png';
import Exchange1 from '../../assets/images/binance-42e7be5b (1).svg';
import Exchange2 from '../../assets/images/coin-market-cap-fd724ce8 (1).svg';
import Exchange3 from '../../assets/images/pancakeswap.png';

function WhereToBuy() {
  return (
    <section className={`${styles.whereToBuy} ${styles.heroReverse}`}>
      <img src={HeroImage} alt="Hero" className={styles.heroImage} />
      <div className={styles.content}>
        <h2 className={styles.title}>Where to Buy $BBC</h2>
        <p className={styles.description}>Available on Major Exchanges</p>
        <div className={styles.exchanges}>
        <div className={styles.exchange} onClick={() => window.open('https://www.binance.us/', '_blank')}>
         <img src={Exchange1} alt="Exchange 1" />
         </div>
         <div className={styles.exchange} onClick={() => window.open('https://coinmarketcap.com/', '_blank')}>
          <img src={Exchange2} alt="Exchange 2" />
        </div>
        <div className={styles.exchange} onClick={() => window.open('https://pancakeswap.finance/swap', '_blank')}>
         <img src={Exchange3} alt="Exchange 3" />
         </div>
        </div>
        <a href="https://your-exchanges-link.com" target="_blank" rel="noopener noreferrer" className={styles.exchangesBtn}>
          $BBC Dapp
        </a>
      </div>
    </section>
  );
}

export default WhereToBuy;
