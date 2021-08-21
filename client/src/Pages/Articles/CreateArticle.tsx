import React, {useCallback, useMemo} from 'react';
import Formik, {Form, Field, ErrorMessage} from 'formik';

const CreateArticle: React.FC = () => {
  const initValues = useMemo(() => ({
    title: '',
    content: '',
    author: '', //
    tags: [], // state ? or custom Field
    comments: [], //
    is_approved: false, //
    liked_by: [], //
    code_name: '', // translit
  }), []);

  const submitHandler = useCallback((values) => {
    console.log(values);
  }, [history]);

  return <div>
    <h2>Создание статьи</h2>

    <Formik
      initialValues={initValues}
      // validationSchema
      onSubmit={submitHandler}>
      {({values: {title, content}}) => <Form>
        {/* <label>Tags Selector</label>*/}

        <label htmlFor="title">Название статьи</label>
        <Field id="title" name="title" type="text" value={title} />
        <ErrorMessage name="title" component="div" />

        {/* TODO: Text Editor Here */}
        <Field id="content" name="content" type="text" value={content} />
        <ErrorMessage name="content" component="div" />

      </Form>}
    </Formik>
  </div>;
};

export default CreateArticle;
