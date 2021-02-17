import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';

import loginSchema from '../../lib/validationSchemas/loginSchema';
import { authActionLogin } from '../../actions/auth';
import styles from './Auth.module.sass';

const LoginForm = ({ login, history }) => {
  const submitHandler = (values) => {
    const data = { values, history };
    login(data);
  };

  return (
    <div className={styles.formContainer}>
      <h2>Вход в аккаунт</h2>

      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={loginSchema}
        onSubmit={(values) => submitHandler(values)}
      >
        {({ values }) => (
          <Form>
            <label htmlFor="email">Почта</label>
            <Field
              id="email"
              name="email"
              type="email"
              value={values.email}
              //
            />
            <ErrorMessage
              component="div"
              className={styles.errorContainer}
              name="email"
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

const mapDispatchToProps = (dispatch) => ({
  login: (data) => dispatch(authActionLogin(data)),
});

export default withRouter(connect(null, mapDispatchToProps)(LoginForm));
