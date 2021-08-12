import React, {useCallback, useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {getTagValues} from '../../utils/tagsFunctions';
import {Field, Form, Formik} from 'formik';
import * as _ from 'lodash';
import styles from './TagsActions.module.sass';
import {updateTag} from '../../actions/tagsEditor';

const EditTag: React.FC = ({pathArr, tagsTree, closeModal, editTag}) => {
  const [tagValues, setTagValues] = useState({});

  useEffect(() => {
    const targetBranch = tagsTree.find((tag) => tag.code_name === pathArr[0]);
    const values = _.omit(getTagValues(targetBranch, pathArr), ['id']);

    setTagValues(values);
  }, []);

  const submitHandler = useCallback(() => {
    const data = {tagsChainArr: pathArr, tagData: tagValues};
    console.log(data);
    editTag(data);
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

const mapDispatchToProps = (dispatch) => ({
  editTag: (data) => dispatch(updateTag(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditTag);
