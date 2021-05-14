import { Controller, Post } from '@nestjs/common';
import { TagsService } from './tags.service';

//  const testArr = ['name1', 'name1.1', 'name1.1.1', 'name1.1.1.2'];
// const testBranch = {
//   code_name: 'name1',
//   child_tags: [
//     {code_name: 'name1.1', child_tags: [
//       {code_name: 'name1.1.1', child_tags: [
//         {code_name: 'name1.1.1.1', child_tags: []},
//         {code_name: 'name1.1.1.2', child_tags: []}
//         ]
//       }
//     ]},
//     {code_name: 'name1.2', child_tags: []}
//     ],
//   };

@Controller('tags')
export class TagsController {
  constructor(private tagsService: TagsService) {}

  // get full tree

  // get branch

  // create tag
  @Post()
  async create(pathArr, tagBody) {
    // for primary tag
    if (pathArr.length === 0) {
      return await this.tagsService.create(tagBody);
    }

    // for tree tags
    const tagBranch = await this.tagsService.getByBody({
      code_name: pathArr[0],
    });
    const depthCounter = pathArr.length - 1;

    const updatedBranch = addTagToBranch(
      tagBranch,
      depthCounter,
      pathArr,
      tagBody,
    );

    await this.tagsService.updateById(tagBranch.id, updatedBranch);

    return updatedBranch;
  }

  // edit tag

  // delete tags
}

function addTagToBranch(branch, depthCounter, depthArr, targetToAdd, i = 0) {
  if (i === depthCounter) {
    branch.child_tags.push(targetToAdd);
    return branch;
  }

  i++;
  return {
    ...branch,
    child_tags: branch.child_tags.map((tag) => {
      if (tag.code_name === depthArr[i])
        return addTagToBranch(tag, depthCounter, depthArr, targetToAdd, i);
      return tag;
    }),
  };
}

function updateTagInBranch(
  branch,
  depthCounter,
  depthArr,
  target, // need full target data
  i = 0,
) {
  if (i === depthCounter) {
    const tags = branch.child_tags.map((tag) => {
      if (tag.code_name === target.code_name) return target;
      return tag;
    });
    return { ...branch, child_tags: tags };
  }

  i++;
  return {
    ...branch,
    child_tags: branch.child_tags.map((tag) => {
      if (tag.code_name === depthArr[i])
        return updateTagInBranch(tag, depthCounter, depthArr, target, i);
      return tag;
    }),
  };
}

function removeTagFromBranch(branch, depthCounter, depthArr, target, i = 0) {
  if (i === depthCounter) {
    const tags = branch.child_tags.filter(
      (tag) => tag.code_name !== target.code_name,
    );
    return { ...branch, child_tags: tags };
  }

  i++;
  return {
    ...branch,
    child_tags: branch.child_tags.map((tag) => {
      if (tag.code_name === depthArr[i])
        return removeTagFromBranch(tag, depthCounter, depthArr, target, i);
      return tag;
    }),
  };
}
