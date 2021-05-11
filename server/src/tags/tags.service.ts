import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TagEntity } from 'src/entities/tag.entity';
import { Repository } from 'typeorm';
import { CreateTagDto } from './dto/create-tag.dto';

@Injectable()
export class TagsService {
  constructor(
    @InjectRepository(TagEntity)
    readonly tagRepository: Repository<TagEntity>,
  ) {}

  // get full tree
  async getAll() {
    const tags = this.tagRepository.find();
    return tags;
  }

  // get branch
  async getById(id: string) {
    const tagsBranch = this.tagRepository.findById(string);
    return tagsBranch;
  }

  async create(tag: CreateTagDto) {
    const newTagTree: CreateTagDto = {
      related_tags: [],
      child_tags: [],
      ...tag,
    };

    return await this.tagRepository.save(newTagTree);
  }

  // update (name, code_name, related_tags, child_tags)
  async updateById(id, updateBody) {
    await this.tagRepository.update(id, updateData);
    return await this.tagRepository.findOne(id);
  }

  async removeById(id: string): Promise < boolean > {
    await this.tagRepository.delete(id);
    const article = await this.tagRepository.findOne(id);
    if (article) return false;
    return true;
  }
}
