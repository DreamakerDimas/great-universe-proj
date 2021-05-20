import React from 'react';

const TagsTree = (props) => {
  const { tagsTree, select } = props;

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

  const renderTreeNames = (tree) => {
    console.log(tree);
    const renderBranchNames = (branch) => {
      if (branch.child_tags.length === 0) {
        return '';
      }

      return branch.child_tags.map((tag) => {
        return (
          <li>
            {tag.code_name}
            <ul>{renderBranchNames(tag)}</ul>
          </li>
        );
      });
    };

    return tree.map((branch) => <ul>{renderBranchNames(branch)}</ul>);
  };

  return <div>{renderTreeNames([testBranch, testBranch])}</div>;
};

export default TagsTree;
