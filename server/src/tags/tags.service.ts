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

  // get branch

  async createPrimary(tag: CreateTagDto) {
    const newTagTree: CreateTagDto = {
      related_tags: [],
      child_tags: [],
      ...tag,
    };

    return await this.tagRepository.save(newTagTree);
  }

  // update (name, code_name, related_tags)

  // delete

  // create child (actions more like update)

  // delete child

  // update child
}
