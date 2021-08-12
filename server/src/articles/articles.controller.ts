import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import {ArticlesService} from './articles.service';
import {CreateArticleDto} from './dto/create-article.dto';
import {UpdateArticleDto} from './dto/update-article.dto';


@Controller('articles')
export class ArticlesController {
  constructor(private articlesService: ArticlesService) {}

  // ++++++++++++++++++++++++
  // ++++++++++++++++++++++++
  // get by tags & sort by date & other filters !!!

  /**
   * Get Article By Id.
   * @param {string} id - Article doc ID.
   */
  @Get('/:id')
  async getArticleById(@Param('id') id: string) {
    return this.articlesService.findById(id);
  }

  /**
   * Create Article Controller
   * @param {CreateArticleDto} body - Article Data.
   */
  @Post()
  async createArticle(@Body() body: CreateArticleDto) {
    return this.articlesService.create(body);
  }

  /**
   * Update.
   * @param {UpdateArticleDto} body - Article Data for update.
   * @param {string} id - Article doc ID which need to update.
   */
  @Post('update/:id')
  async editArticle(@Body() body: UpdateArticleDto, @Param('id') id: string) {
    return this.articlesService.updateById(id, body);
  }

  /**
   * Delete.
   * @param {string} id - Article doc ID which need to delete.
   */
  @Delete('/:id')
  async deleteArticleById(@Param('id') id: string) {
    return this.articlesService.removeById(id);
  }
}
