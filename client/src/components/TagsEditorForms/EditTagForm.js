import React, {useCallback} from 'react';
import {Formik, Form, Field} from 'formik';

const EditTagForm = ({initValues}) => {
  const submitHandler = useCallback((values) => {
    console.log(values);
  }, []);

  return <div>
    <Formik initialValues={initValues} onSubmit={submitHandler}>
      {({
        values: {name}} ) => (
        <Form className={styles.formContainer}>
          <label htmlFor="name">Наименование</label>
          <Field
            id="name"
            name="name"
            type="text"
            value={name}
            //
          />
          {/* <ErrorMessage
                    className={styles.errorContainer}
                    component="div"
                    name="disp_name"
                  /> */}

          {/* Color. Only for primary tag?? */}

          <button type="submit">Изменить</button>
        </Form>
      )}
    </Formik>
  </div>;
};

export default EditTagForm;
