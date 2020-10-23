import React from 'react';
import styles from './Header.module.sass';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerLogo}>
        <Link to="/">
          <div className={styles.logoContainer}>
            <img src={logo} alt="logo" />
          </div>
        </Link>
      </div>

      <ul className={styles.navContainer}>
        <li className={styles.navButton}>
          <Link to="/">
            <span>Домой</span>
          </Link>
        </li>
        <li className={styles.navButton}>
          <Link to="/articles">
            <span>Статьи</span>
          </Link>
        </li>
        <li className={styles.navButton}>
          <Link to="/history">
            <span>История</span>
          </Link>
        </li>
        <li className={styles.navButton}>
          <Link to="/map">
            <span>Карта</span>
          </Link>
        </li>
        <li className={styles.navButton}>
          <Link to="/auth">
            <span>Вход</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
