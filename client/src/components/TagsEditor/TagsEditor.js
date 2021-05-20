import React from 'react';
import TagsTree from '../TagsTree/TagsTree';
import styles from './TagsEditor.module.sass';

const TagsEditor = (props) => {
  return (
    <div className={styles.editorContainer}>
      <div className={styles.tagsTreeContainer}></div>
      <div className={styles.tagDataContainer}></div>
    </div>
  );
};

export default TagsEditor;
