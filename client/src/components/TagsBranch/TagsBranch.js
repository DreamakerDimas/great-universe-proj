import React from 'react';

const TagsBranch = (props) => {
  const { branch, select, childs, pathArr } = props;

  return (
    <li>
      {/* here add accordion button */}
      <div
        className="tagNameContainer"
        onClick={() => select({ tagData: branch, tagChain: pathArr })}
      >
        {branch.name}
      </div>
      {childs.length > 0 && <ul>{childs.map((child) => child)}</ul>}
    </li>
  );
};

export default TagsBranch;
