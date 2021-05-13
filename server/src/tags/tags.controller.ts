import { Controller, Post } from '@nestjs/common';
import { TagsService } from './tags.service';

@Controller('tags')
export class TagsController {
  constructor(private tagService: TagsService) {}
  //    const tagsList = tag.parents_tree;
  // if (tagsList.length === 0) {
  // }

  // create tag
  @Post()
  async create(pathArr, tagBody) {
    // for primary tag
    if (pathArr.length === 0) {
      return await this.tagService.create(tagBody);
    }

    // for tree tags
    const tagBranch = this.tagService.getByBody({ code_name: pathArr[0] });
    // deeps depends from length
  }

  // edit tag

  // delete tags
}
