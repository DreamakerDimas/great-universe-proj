import { Field, Form, Formik } from 'formik';
import React from 'react';
import styles from './ContryForm.module.sass';

const CountryForm = (props) => {
  const initValues = {
    disp_name: '',
    description: '',
    ...props.initValues,
  }; // government_type, emblem_image, tags

  const submitHandler = (values) => {
    props.actionFunc(values);
  };

  return (
    <div className={styles.outerContainer}>
      <h4>{props.initValues.zone_name}</h4>
      <Formik initialValues={initValues} onSubmit={submitHandler}>
        {({
          values: { disp_name, emblem_img, description, government_type, tags },
        }) => (
          <Form className={styles.formContainer}>
            <label htmlFor="disp_name">Наименование</label>
            <Field
              id="disp_name"
              name="disp_name"
              type="text"
              value={disp_name}
              //
            />
            {/* <ErrorMessage
              className={styles.errorContainer}
              component="div"
              name="disp_name"
            /> */}

            <label htmlFor="disp_name">Ссылка на изображение</label>
            <Field
              id="emblem_img"
              name="emblem_img"
              type="text"
              value={emblem_img}
              //
            />
            {/* <ErrorMessage
              className={styles.errorContainer}
              component="div"
              name="emblem_img"
            /> */}

            <label htmlFor="government_type">Государственный строй</label>
            <Field
              id="government_type"
              name="government_type"
              type="text"
              value={government_type}
              //
            />
            {/* <ErrorMessage
              className={styles.errorContainer}
              component="div"
              name="government_type"
            /> */}

            <label htmlFor="description">Описание</label>
            <Field
              id="description"
              name="description"
              type="textarea"
              component="textarea"
              value={description}
              //
            />
            {/* <ErrorMessage
              className={styles.errorContainer}
              component="div"
              name="description"
            /> */}

            {/* <label htmlFor="tags">Теги</label>
            <Field
              id="tags"
              name="tags"
              type="text"
              value={tags}
              //
            />
            <ErrorMessage
              className={styles.errorContainer}
              component="div"
              name="tags"
            /> */}

            <button type="submit">Обновить</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CountryForm;
