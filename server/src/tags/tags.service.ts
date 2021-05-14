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
    const tags = await this.tagRepository.find();
    return tags;
  }

  // get branch tree
  async getById(id: string) {
    const tagsBranch = await this.tagRepository.findOne(id);
    return tagsBranch;
  }

  async getByBody(body) {
    return this.tagRepository.findOne(body);
  }

  async create(tag: CreateTagDto) {
    const newTagTree: CreateTagDto = {
      related_tags: [],
      child_tags: [],
      ...tag,
    };

    return await this.tagRepository.save(newTagTree);
  }

  // update (name, related_tags, child_tags)
  async updateById(id, updateData) {
    await this.tagRepository.update(id, updateData);
    return await this.tagRepository.findOne(id);
  }

  async removeById(id: string): Promise<boolean> {
    let result = false;
    try {
      await this.tagRepository.delete(id);
      result = true;
    } catch (err) {
      // !!!
      console.log(err);
    }
    return result;
  }
}
