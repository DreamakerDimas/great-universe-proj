const testArr = ['name1', 'name1.1', 'name1.1.1', 'name1.1.1.2'];

  const testBranch = { 
    code_name: 'name1', 
    child_tags: [
      {code_name: 'name1.1', child_tags: [
        {code_name: 'name1.1.1', child_tags: [
          {code_name: 'name1.1.1.1', child_tags: []}, 
          {code_name: 'name1.1.1.2', child_tags: []}
          ]
        }
      ]}, 
      {code_name: 'name1.2', child_tags: []}
      ],
    };

    const target = {code_name: 'target', child_tags: []};

    // for tree tags
    let depthCounter = testArr.length;
    //const tagBranch = this.tagService.getByBody({ code_name: pathArr[0] });
    depthCounter--;

const newBranch = addTag(testBranch, depthCounter, testArr, target);
    
function addTagToBranch(branch, depthCounter, depthArr, targetToAdd, func, i=0) {
    if (i === depthCounter) {
        branch.child_tags.push(targetToAdd);
        return branch;
    }

    i++;
    return {...branch, child_tags: branch.child_tags.map(tag => {
        if (tag.code_name === depthArr[i]) return addTag(tag, depthCounter, depthArr, targetToAdd, i);
        return tag;
    })}
}

console.log(JSON.stringify(newBranch, null, 2));