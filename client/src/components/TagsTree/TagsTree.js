import React from 'react';
import TagsBranch from '../TagsBranch/TagsBranch';
import styles from './TagsTree.module.sass';

const TagsTree = (props) => {
  const { tagsTree, select } = props;

  const renderBranch = (branch, pathArr) => {
    if (branch.child_tags.length === 0) {
      return (
        <TagsBranch
          styles={styles.branchStyles}
          key={branch.id}
          branch={branch}
          select={select}
          childs={[]}
          pathArr={pathArr}
        />
      );
    }

    return (
      <TagsBranch
        styles={styles.branchStyles} //? mb use state (color) 
        key={branch.id}
        branch={branch}
        select={select}
        childs={branch.child_tags.map((tag) => {
          const newPathArr = [...pathArr, tag.code_name];
          return renderBranch(tag, newPathArr);
        })}
        pathArr={pathArr}
      />
    );
  };

  return (
    <div className={styles.treeContainer}>
      <ul className={styles.treeList}>
        {tagsTree.map((branch) => renderBranch(branch, [branch.code_name]))}
      </ul>
    </div>
  );
};

export default TagsTree;
