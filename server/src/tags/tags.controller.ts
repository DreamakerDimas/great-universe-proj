import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
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
  @Get()
  async getAll() {
    return this.tagsService.getAll();
  }

  // get branch
  @Get('/:id')
  async getBranch(@Param('id') id: string) {
    return this.tagsService.getById(id);
  }

  // create tag
  @Post()
  async create(
    @Body('tagsChainArr') tagsChainArr: Array<string>,
    @Body('tagData') tagData: CreateTagDto,
  ) {
    // for primary tag
    if (tagsChainArr.length === 0) {
      return await this.tagsService.create(tagData);
    }

    // for tree tags
    const tagBranch = await this.tagsService.getByBody({
      code_name: tagsChainArr[0],
    });

    const updatedBranch = addTagToBranch(tagBranch, tagsChainArr, tagData);

    await this.tagsService.updateById(tagBranch.id, updatedBranch);

    return updatedBranch;
  }

  // edit tag
  @Put() // tagsChain, tagData in props or body? !!! obviously need body
  async edit(tagsChainArr: Array<string>, tagData: UpdateTagDto) {
    const tagBranch = await this.tagsService.getByBody({
      code_name: tagsChainArr[0],
    });

    if (tagsChainArr.length === 1) {
      return this.tagsService.updateById(tagBranch.id, tagData);
    }

    const updatedBranch = updateTagInBranch(tagBranch, tagsChainArr, tagData);

    await this.tagsService.updateById(tagBranch.id, updatedBranch);

    return updatedBranch;
  }

  // delete tag
  @Delete() // tagsChain in props or body? !!! obviously need body
  async remove(tagsChainArr: Array<string>) {
    const tagBranch = await this.tagsService.getByBody({
      code_name: tagsChainArr[0],
    });
    const tagID = tagBranch.id.toString();

    if (tagsChainArr.length === 1) {
      await this.tagsService.removeById(tagID);
      return true; // or what ??!!!
    }

    const updatedBranch = removeTagFromBranch(tagBranch, tagsChainArr);

    await this.tagsService.updateById(tagID, updatedBranch);
    return updatedBranch;
  }
}

//  to another file
function addTagToBranch(branch, tagsChainArr, targetToAdd, i = 0) {
  if (i === tagsChainArr.length - 1) {
    branch.child_tags.push(targetToAdd);
    return branch;
  }

  i++;
  return {
    ...branch,
    child_tags: branch.child_tags.map((tag) => {
      if (tag.code_name === tagsChainArr[i])
        return addTagToBranch(tag, tagsChainArr, targetToAdd, i);
      return tag;
    }),
  };
}

function updateTagInBranch(
  branch,
  tagsChainArr,
  target, // need full target data
  i = 0,
) {
  if (i === tagsChainArr.length - 1) {
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
      if (tag.code_name === tagsChainArr[i])
        return updateTagInBranch(tag, tagsChainArr, target, i);
      return tag;
    }),
  };
}

function removeTagFromBranch(branch, tagsChainArr, i = 0) {
  if (i === tagsChainArr.length - 1) {
    const tags = branch.child_tags.filter(
      (tag) => tag.code_name !== tagsChainArr[tagsChainArr.length],
    );
    return { ...branch, child_tags: tags };
  }

  i++;
  return {
    ...branch,
    child_tags: branch.child_tags.map((tag) => {
      if (tag.code_name === tagsChainArr[i])
        return removeTagFromBranch(tag, tagsChainArr, i);
      return tag;
    }),
  };
}
