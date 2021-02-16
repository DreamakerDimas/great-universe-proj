import React, { useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getUser, clearUser } from '../../actions/user';
import styles from './Header.module.sass';
import logo from '../../assets/logo.png';
import UserMenu from './UserMenu';

const Header = ({ getUser, userData, error, loading, logout }) => {
  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {}, [userData]);

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
          {userData ? (
            <UserMenu userData={userData} logout={logout} />
          ) : (
            <Link to="/auth">
              <span>Авторизация</span>
            </Link>
          )}
        </li>
      </ul>
    </div>
  );
};

Header.propTypes = {
  //
};

const mapStateToProps = (state) => {
  const { data, error, loading } = state.userStore;
  return {
    userData: data,
    error,
    loading,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getUser: (data) => dispatch(getUser(data)),
  logout: () => dispatch(clearUser()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
