import React from 'react';

const CreateTagForm = () => {
  const initValues; //
  
  return <div>
   <Formik initialValues={initValues} onSubmit={submitHandler}>
          {({
            values: { name }} ) => (
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
              
              {/* Add childs creation */} 
  
              <button type="submit">Создать</button>
            </Form>
          )}
        </Formik>
  </div>;
};

export default CreateTagForm;