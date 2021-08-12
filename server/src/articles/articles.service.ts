import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {ArticleEntity} from 'src/entities/article.entity';
import {Repository} from 'typeorm';
import {CreateArticleDto} from './dto/create-article.dto';
import {DefaultArticleDto} from './dto/default-article.dto';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(ArticleEntity)
    readonly articleRepository: Repository<ArticleEntity>,
  ) {}

  async create(article: CreateArticleDto): Promise<ArticleEntity | null> {
    const newArticle: DefaultArticleDto = {
      ...article,
      isApproved: false,
      comments: [],
      likedBy: [],
    };

    return await this.articleRepository.save(newArticle);
  }

  async findById(id: string): Promise<ArticleEntity | null> {
    return await this.articleRepository.findOne(id);
  }

  // !!! here find many by filter (tags, title, content, order, limit)

  async updateById(id: string, updateData): Promise<ArticleEntity | null> {
    await this.articleRepository.update(id, updateData);
    return await this.articleRepository.findOne(id);
  }

  async removeById(id: string): Promise<boolean> {
    await this.articleRepository.delete(id);
    return true;
  }
}
