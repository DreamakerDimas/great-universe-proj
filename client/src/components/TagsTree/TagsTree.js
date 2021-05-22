import React from 'react';
import TagsBranch from '../TagsBranch/TagsBranch';

const TagsTree = (props) => {
  const { tagsTree, select } = props;

  const renderBranch = (branch, pathArr) => {
    if (branch.child_tags.length === 0) {
      return (
        <TagsBranch
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
    <div>
      <ul>
        {tagsTree.map((branch) => renderBranch(branch, [branch.code_name]))}
      </ul>
    </div>
  );
};

export default TagsTree;
