import React from 'react';
import { connect } from 'react-redux';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';

import registerSchema from '../../lib/validationSchemas/registerSchema';
import { authActionRegister } from '../../actions/auth';
import styles from './Auth.module.sass';

const RegistrationForm = ({ register }) => {
  return (
    <div className={styles.formContainer}>
      <h2>Регистрация аккаунта</h2>

      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={registerSchema}
        onSubmit={(values) => register(values)}
      >
        {({ values }) => (
          <Form>
            <label htmlFor="name">Логин</label>
            <Field
              id="name"
              name="name"
              type="text"
              value={values.name}
              //
            />
            <ErrorMessage
              className={styles.errorContainer}
              component="div"
              name="name"
            />

            <label htmlFor="email">Почта</label>
            <Field
              id="email"
              name="email"
              type="email"
              value={values.email}
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
              value={values.password}
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
              value={values.confirmPassword}
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

export default connect(null, mapDispatchToProps)(RegistrationForm);
