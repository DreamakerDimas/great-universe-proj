import React from 'react';
import {useState} from 'react';
import LoginForm from '../../components/Auth/LoginForm';
import RegistrationForm from '../../components/Auth/RegistrationForm';
import styles from './AuthPage.module.sass';

const Auth = () => {
  const [isLoginForm, setCurrentForm] = useState(true);

  const changeFormHandler = () => {
    setCurrentForm(!isLoginForm);
  };

  return (
    <>
      {isLoginForm ? (
        <>
          <div className={styles.switcherBar}>
            <span className={styles.activeSpan}>Вход</span>
            <span onClick={changeFormHandler}>Регистрация</span>
          </div>
          <LoginForm />
        </>
      ) : (
        <>
          <div className={styles.switcherBar}>
            <span onClick={changeFormHandler}>Вход</span>
            <span className={styles.activeSpan}>Регистрация</span>
          </div>
          <RegistrationForm />
        </>
      )}
    </>
  );
};

export default Auth;
