import { Module } from '@nestjs/common';
import { TagsService } from './tags.service';
import { TagsController } from './tags.controller';

@Module({
  providers: [TagsService],
  controllers: [TagsController],
  exports: [TagsController],
})
export class TagsModule {}
