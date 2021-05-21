import { Module } from '@nestjs/common';
import { TagsService } from './tags.service';
import { TagsController } from './tags.controller';
import { TagEntity } from 'src/entities/tag.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [TagsService],
  imports: [TypeOrmModule.forFeature([TagEntity])],
  controllers: [TagsController],
})
export class TagsModule {}
