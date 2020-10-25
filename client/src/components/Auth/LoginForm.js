import React from 'react';
import { Redirect } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import loginSchema from '../../lib/validationSchemas/loginSchema';
import { login } from '../../actions/auth';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from './Auth.module.sass';

const LoginForm = ({ login, isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div className={styles.formContainer}>
      <h2>Вход в аккаунт</h2>

      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={loginSchema}
        onSubmit={async (values) => {
          login(values);
        }}
      >
        {({ values }) => (
          <Form>
            <label htmlFor="email">Почта</label>
            <Field
              id="email"
              name="email"
              type="email"
              value={values.name}
              // just prettier stopper
            />
            <ErrorMessage
              component="div"
              className={styles.errorContainer}
              name="name"
            />

            <label htmlFor="password">Пароль</label>
            <Field
              id="password"
              name="password"
              type="password"
              value={values.password}
            />
            <ErrorMessage
              component="div"
              className={styles.errorContainer}
              name="password"
            />

            <button type="submit">Войти</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(LoginForm);
