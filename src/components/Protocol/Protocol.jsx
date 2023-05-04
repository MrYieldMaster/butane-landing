import React from 'react';
import styles from './Protocol.module.css';
import HeroImage from '../../assets/images/building.png';

function Protocol() {
  return (
    <section className={`${styles.protocol} ${styles.heroReverse}`}>
      <img src={HeroImage} alt="Hero" className={styles.heroImage} />
      <div className={styles.content}>
        <h2 className={styles.title}>The Butane Protocol</h2>
        <p className={styles.description}>
          Butane Core is an Open-Source, Typescript-Based, Layer 1 Blockchain Protocol built to be simple and efficient.
        </p>
        <ul className={styles.keyPoints}>
          <li className={styles.keyPoint}>- Eco-Friendly PoS Consensus</li>
          <li className={styles.keyPoint}>- Expandable, Modular Codebase</li>
          <li className={styles.keyPoint}>- Customizable Transaction Logic</li>
        </ul>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className={styles.githubBtn}>
          View on GitHub
        </a>
      </div>
    </section>
  );
}

export default Protocol;
