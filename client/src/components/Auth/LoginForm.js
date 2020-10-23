import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import loginSchema from '../../lib/validationSchemas/loginSchema';
import styles from './Auth.module.sass';

const LoginForm = () => {
  return (
    <div className={styles.formContainer}>
      <h2>Вход в аккаунт</h2>

      <Formik
        initialValues={{ name: '', password: '' }}
        validationSchema={loginSchema}
        onSubmit={(values) => {}}
      >
        {({ values }) => (
          <Form>
            <label htmlFor="login">Логин</label>
            <Field
              id="name"
              name="name"
              type="text"
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

export default LoginForm;
