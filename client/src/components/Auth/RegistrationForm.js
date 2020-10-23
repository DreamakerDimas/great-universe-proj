import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import styles from './Auth.module.sass';
import registerSchema from '../../lib/validationSchemas/registerSchema';

const RegistrationForm = () => {
  //onSubmit()

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
        onSubmit={(values) => {}}
      >
        {({ values }) => (
          <Form>
            <label htmlFor="name">Логин</label>
            <Field
              id="name"
              name="name"
              type="text"
              value={values.name}
              // just prettier stopper
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
              // just prettier stopper
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
              //onChange={formik.handleChange}
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
              //onChange={formik.handleChange}
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

export default RegistrationForm;
