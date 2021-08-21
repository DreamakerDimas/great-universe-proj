import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import loginSchema from '../../lib/validationSchemas/loginSchema';
import {authActionLogin} from '../../actions/auth';
import styles from './Auth.module.sass';
import {History} from 'history';
import {Dispatch} from 'redux';

interface ILoginValues {
    email: string;
    password: string;
}

interface ILoginData {
    values: ILoginValues;
    history: History<any>;
}

interface ILoginFormProps {
    login: (data: ILoginData) => void;
    history: History<any>;
}

const LoginForm: React.FC<ILoginFormProps> = ({login, history}) => {
  const initValues = {email: '', password: ''};

  const submitHandler = (values: ILoginValues) => {
    const data = {values, history};
    login(data);
  };

  return (
    <div className={styles.formContainer}>
      <h2>Вход в аккаунт</h2>

      <Formik
        initialValues={initValues}
        validationSchema={loginSchema}
        onSubmit={submitHandler}
      >
        {({values: {email, password}}) => (
          <Form>
            <label htmlFor="email">Почта</label>
            <Field
              id="email"
              name="email"
              type="email"
              value={email}
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
              value={password}
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

const mapDispatchToProps = (dispatch: Dispatch) => ({
  login: (data: ILoginData) => dispatch(authActionLogin(data)),
});

export default withRouter(connect(null, mapDispatchToProps)(LoginForm));
