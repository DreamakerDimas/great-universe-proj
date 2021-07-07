import React, {useCallback, useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {getTagValues} from '../../utils/tagsFunctions';
import {Field, Form, Formik} from 'formik';
import * as _ from 'lodash';
import styles from './TagsActions.module.sass';

const CreateTag = ({pathArr, closeModal}) => {
  const [tagValues, setTagValues] = useState({
    code_name: '',
    name: '',
    child_tags: [],
    related_tags: [],
  });


  const submitHandler = useCallback(() => {
    console.log(tagValues); // !!! async action
    // add new path arr!!! pathArr.push(code_name)
    closeModal();
  }, [tagValues]);

  const changeTagValue = useCallback((e) => {
    const newObj = {[e.target.name]: e.target.value};
    setTagValues((prev) => ({...prev, ...newObj}));
  }, []);

  return <div className={styles.container}>
    {tagValues && <Formik initialValues={tagValues} onSubmit={submitHandler}>
      {() => (
        <Form className={styles.formContainer}>
          <label htmlFor={'name'}>Наименование</label>
          <Field
            name={'name'}
            type={'text'}
            value={tagValues.name}
            onChange={changeTagValue}
            className={styles.field}
          />

          <label htmlFor={'name'}>Кодовое имя (транслитерация)</label>
          <Field
            name={'code_name'}
            type={'text'}
            value={tagValues.code_name}
            onChange={changeTagValue}
            className={styles.field}
          />

          {/* Color. Only for primary tag?? */}

          <button className={styles.button} type="submit">Изменить</button>
        </Form>
      )}
    </Formik>}
  </div>;
};

const mapStateToProps = (state) => {
  const {tagsTree} = state.tagsEditorStore;
  return {tagsTree};
};

export default connect(mapStateToProps, null)(CreateTag);
