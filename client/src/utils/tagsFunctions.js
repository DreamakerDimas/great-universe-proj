export const getTagValues = (branch, pathArr, i = 0) => {
  if (branch.code_name === pathArr[pathArr.length - 1]) {
    return branch;
  }

  i++;
  const nextBranch = branch.child_tags.find((tag) => tag.code_name === pathArr[i]);
  return getTagValues(nextBranch, pathArr, i);
};
