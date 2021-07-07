import React, {useEffect, useState} from 'react';
import styles from './TagsActions.module.sass';
import EditTagForm from '../TagsEditorForms/EditTagForm';
import {connect} from 'react-redux';
import {getTagValues} from '../../utils/tagsFunctions';

const EditTag = ({pathArr, tagsTree}) => {
  const [tagValues, setTagValues] = useState(null);

  useEffect(() => {
    console.log(getTagValues(tagsTree[0] ));
    setTagValues(null);
  }, []);

  return <div className={styles.container}>
    <EditTagForm initValues={{}} />
  </div>;
};

const mapStateToProps = (state) => {
  const {tagsTree} = state.tagsEditorStore;
  return {tagsTree};
};

export default connect(mapStateToProps, null)(EditTag);
