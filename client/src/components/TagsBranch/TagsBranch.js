import React from 'react';

const TagsBranch = (props) => {
  const { branch, select, childs, pathArr } = props;

  return (
    <li>
      {branch.code_name}
      {childs.length > 0 && <ul>{childs.map((child) => child)}</ul>}
    </li>
  );
};

export default TagsBranch;
