import React from 'react';
import styles from './Hero.module.css';
import HeroImage from '../../assets/images/Hero.png';

function Hero() {
  return (
    <section className={styles.hero}>
      <img src={HeroImage} alt="Hero" className={styles.heroImage} />
      <div className={styles.content}>
        <h1 className={styles.title}>
          A Blockchain Ecosystem
          <br />
          Built For Everyone
        </h1>
        <p className={styles.description}>
          Whether you are a blockchain enthusiast, a small startup or a Fortune 500, $BBC is the perfect foundation for introducing your ideas to a growing ecosystem of passionate users
        </p>
        <a href="https://devwizard.gitbook.io/usdgas-docs/" target="_blank" rel="noopener noreferrer" className={styles.whitepaperBtn}>
          Whitepaper
        </a>
      </div>
    </section>
  );
}

export default Hero;
