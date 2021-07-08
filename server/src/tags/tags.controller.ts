import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import {CreateTagDto} from './dto/create-tag.dto';
import {UpdateTagDto} from './dto/update-tag.dto';
import {
  addTagToBranch,
  removeTagFromBranch,
  updateTagInBranch,
} from './tags.functions';
import {TagsService} from './tags.service';

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
  @Post('update') // tagsChain, tagData in props or body? !!! obviously need body
  async edit(
      @Body('tagsChainArr') tagsChainArr: Array<string>,
      @Body('tagData') tagData: UpdateTagDto,
  ) {
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
  @Post('delete') // tagsChain in props or body? !!! obviously need body
  async remove(
      @Body('tagsChainArr') tagsChainArr: Array<string>,
  ) {
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
