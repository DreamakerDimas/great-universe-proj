import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import PropTypes from 'prop-types';

import registerSchema from '../../lib/validationSchemas/registerSchema';
import {authActionRegister} from '../../actions/auth';
import styles from './Auth.module.sass';

const RegistrationForm = ({register, history}) => {
  const initValues = {
    login: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const submitHandler = (values) => {
    console.log(values);
    const data = {values, history};
    register(data);
  };

  return (
    <div className={styles.formContainer}>
      <h2>Регистрация аккаунта</h2>

      <Formik
        initialValues={initValues}
        validationSchema={registerSchema}
        onSubmit={submitHandler}
      >
        {({values: {login, email, password, confirmPassword}}) => (
          <Form>
            <label htmlFor="login">Логин</label>
            <Field
              id="login"
              name="login"
              type="text"
              value={login}
              //
            />
            <ErrorMessage
              className={styles.errorContainer}
              component="div"
              name="login"
            />

            <label htmlFor="email">Почта</label>
            <Field
              id="email"
              name="email"
              type="email"
              value={email}
              //
            />
            <ErrorMessage
              className={styles.errorContainer}
              component="div"
              name="email"
            />

            <label htmlFor="password">Пароль</label>
            <Field
              id="password"
              name="password"
              type="password"
              value={password}
              //
            />
            <ErrorMessage
              className={styles.errorContainer}
              component="div"
              name="password"
            />

            <label htmlFor="password">Повторите пароль</label>
            <Field
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={confirmPassword}
              //
            />
            <ErrorMessage
              className={styles.errorContainer}
              component="div"
              name="confirmPassword"
            />

            <button type="submit">Зарегистрироватся</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

RegistrationForm.propTypes = {
  register: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  register: (data) => dispatch(authActionRegister(data)),
});

export default withRouter(connect(null, mapDispatchToProps)(RegistrationForm));
