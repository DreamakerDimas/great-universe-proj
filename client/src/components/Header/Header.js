import React from 'react';
import styles from './Header.module.scss';
import logo from '../../assets/logo.png';

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerLogo}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div className={styles.navContainer}>
        <div className={styles.navButton}>Home</div>
        <div className={styles.navButton}>Articles</div>
        <div className={styles.navButton}>History</div>
        <div className={styles.navButton}>Map</div>
      </div>
    </div>
  );
};

export default Header;
