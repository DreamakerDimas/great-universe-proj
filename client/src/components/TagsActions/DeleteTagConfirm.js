import React, {useCallback, useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {getTagValues} from '../../utils/tagsFunctions';
import * as _ from 'lodash';
import styles from './TagsActions.module.sass';
import {deleteTag} from '../../actions/tagsEditor';

const DeleteTagConfirm = ({pathArr, tagsTree, closeModal, deleteTag}) => {
  const [tagValues, setTagValues] = useState({});

  useEffect(() => {
    const targetBranch = tagsTree.find((tag) => tag.code_name === pathArr[0]);
    const values = _.omit(getTagValues(targetBranch, pathArr), ['id']);

    setTagValues(values);
  }, []);

  const submitHandler = useCallback(() => {
    const data = {tagsChainArr: pathArr};

    deleteTag(data);
    closeModal();
  }, [tagValues]);

  return (
    <div className={styles.container}>
      {tagValues &&
      <div>
        <button onClick={submitHandler}>Да</button>
      </div>}
    </div>);
};

const mapStateToProps = (state) => {
  const {tagsTree} = state.tagsEditorStore;
  return {tagsTree};
};

const mapDispatchToProps = (dispatch) => ({
  deleteTag: (data) => dispatch(deleteTag(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteTagConfirm);
