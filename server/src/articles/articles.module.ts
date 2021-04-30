import { Module } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticlesController } from './articles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleEntity } from 'src/entities/article.entity';

@Module({
  providers: [ArticlesService],
  imports: [TypeOrmModule.forFeature([ArticleEntity])],
  controllers: [ArticlesController],
})
export class ArticlesModule {}
