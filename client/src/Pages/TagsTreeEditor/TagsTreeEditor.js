import React from 'react';
import TagsTree from '../../components/TagsTree/TagsTree';
import styles from './TagsTreeEditor.module.sass';

// only for admin, moderator !!!
const TagsTreeEditor = (props) => {
  return (
    <div className={styles.mainContainer}>
      {/* loader */}
      {/* tagsEditor */}
      <div>Tags Editor</div>
      <TagsTree />
    </div>
  );
};

export default TagsTreeEditor;
