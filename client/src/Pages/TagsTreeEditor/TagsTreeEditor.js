import React from 'react';
import TagsTree from '../../components/TagsTree/TagsTree';
import styles from './TagsTreeEditor.module.sass';

// only for admin, moderator !!!
const TagsTreeEditor = (props) => {
  const testBranch = {
    code_name: 'name1',
    child_tags: [
      {
        code_name: 'name1.1',
        child_tags: [
          {
            code_name: 'name1.1.1',
            child_tags: [
              { code_name: 'name1.1.1.1', child_tags: [] },
              { code_name: 'name1.1.1.2', child_tags: [] },
            ],
          },
        ],
      },
      { code_name: 'name1.2', child_tags: [] },
    ],
  };

  return (
    <div className={styles.mainContainer}>
      {/* loader */}
      <TagsTree tagsTree={[testBranch, testBranch]} />
      {/* in to TagsTree - props: tagsTree, select */}
      <div>Tag Description</div>
    </div>
  );
};

export default TagsTreeEditor;
