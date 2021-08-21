import React, {useCallback, useMemo} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import PropTypes from 'prop-types';

import registerSchema from '../../lib/validationSchemas/registerSchema';
import {authActionRegister} from '../../actions/auth';
import styles from './Auth.module.sass';
import {History} from 'history';
import {Dispatch} from 'redux';

interface IRegistrationValues {
    login: string;
    email: string;
    password: string;
    confirmPassword: string;
}

interface IRegistrationData {
    values: IRegistrationValues;
    history?: History<any>;
}

interface IRegistrationFormProps {
    register: (data: IRegistrationData) => void;
    history: History<any>;
}

const RegistrationForm: React.FC<IRegistrationFormProps> = ({register, history}) => {
  const initValues = useMemo<IRegistrationValues>(() => ({
    login: '',
    email: '',
    password: '',
    confirmPassword: '',
  }), []);

  const submitHandler = useCallback((values: IRegistrationValues) => {
    console.log(values);
    const data = {values, history};
    register(data);
  }, [history]);

  return (
    <div className={styles.formContainer}>
      <h2>Регистрация аккаунта</h2>

      <Formik
        initialValues={initValues}
        validationSchema={registerSchema}
        onSubmit={submitHandler}
      >
        {({values: {login, email, password, confirmPassword}}: IRegistrationData) => (
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

const mapDispatchToProps = (dispatch: Dispatch) => ({
  register: (data: IRegistrationData) => dispatch(authActionRegister(data)),
});

export default withRouter(connect(null, mapDispatchToProps)(RegistrationForm));
