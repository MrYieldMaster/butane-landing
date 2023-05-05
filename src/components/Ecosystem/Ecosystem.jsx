import React from 'react';
import styles from './Ecosystem.module.css';
import HeroImage from '../../assets/images/butane.jpg';
import Image1 from '../../assets/images/tokenicons.png';
import Image2 from '../../assets/images/googleplay.png';
import Image3 from '../../assets/images/appstore.png';

function Ecosystem() {
  return (
    <section className={styles.ecosystem}>
      <img src={HeroImage} alt="Hero" className={styles.heroImage} />
      <div className={styles.content}>
        <h2 className={styles.title}>
          Join the Ecosystem
          <br />
          Be a Part of the Web3 Revolution
        </h2>
        <div className={styles.socials}>
          <i className={`fa fa-twitter ${styles.icon}`} aria-hidden="true"></i>
          <i className={`fa fa-telegram ${styles.icon}`} aria-hidden="true"></i>
          <i className={`fa fa-medium ${styles.icon}`} aria-hidden="true"></i>
          <i className={`fa fa-discord ${styles.icon}`} aria-hidden="true"></i>
        </div>
        <div className={styles.images}>
          <img src={Image2} alt="bbc" className={styles.image} />
          <img src={Image3} alt="gas 3" className={styles.image} />
        </div>
      </div>
      <div className={styles.image1Wrapper}>
        <img src={Image1} alt="ddc" className={styles.image1} />
      </div>
    </section>
  );
}

export default Ecosystem;
