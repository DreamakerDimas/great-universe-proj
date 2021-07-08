export function addTagToBranch(branch, tagsChainArr, targetToAdd, i = 0) {
  if (i === tagsChainArr.length - 1) {
    branch.child_tags.push(targetToAdd);
    return branch;
  }

  i++;
  return {
    ...branch,
    child_tags: branch.child_tags.map((tag) => {
      if (tag.code_name === tagsChainArr[i]) {
        return addTagToBranch(tag, tagsChainArr, targetToAdd, i);
      }
      return tag;
    }),
  };
}

export function updateTagInBranch(
    branch,
    tagsChainArr,
    target, // need full target data
    i = 0,
) {
  if (i === tagsChainArr.length - 1) {
    return target;
  }

  i++;
  return {
    ...branch,
    child_tags: branch.child_tags.map((tag) => {
      if (tag.code_name === tagsChainArr[i]) {
        return updateTagInBranch(tag, tagsChainArr, target, i);
      }
      return tag;
    }),
  };
}

export function removeTagFromBranch(branch, tagsChainArr, i = 0) {
  if (i === tagsChainArr.length - 2) {
    const tags = branch.child_tags.filter(
        (tag) => tag.code_name !== tagsChainArr[tagsChainArr.length - 1],
    );
    return {...branch, child_tags: tags};
  }

  i++;
  return {
    ...branch,
    child_tags: branch.child_tags.map((tag) => {
      if (tag.code_name === tagsChainArr[i]) {
        return removeTagFromBranch(tag, tagsChainArr, i);
      }
      return tag;
    }),
  };
}
