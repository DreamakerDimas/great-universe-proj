import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import {ArticlesService} from './articles.service';
import {CreateArticleDto} from './dto/create-article.dto';
import {UpdateArticleDto} from './dto/update-article.dto';

@Controller('articles')
export class ArticlesController {
  constructor(private articlesService: ArticlesService) {
  }

  // get by tags and sort by date, other filters !!!
  // !!!

  @Get('/:id')
  async getArticleById(@Param('id') id: string) {
    return this.articlesService.findById(id);
  }

  // create article
  @Post()
  async createArticle(@Body() body: CreateArticleDto) {
    console.log(body);
  }

  // edit article
  @Post('update') // add dto !!!
  async editArticle(@Body() body: UpdateArticleDto) {
    console.log(body);
  }

  // delete article
    @Delete('/:id')
  async deleteArticleById(@Param('id') id: string) {
    return this.articlesService.removeById(id);
  }
}
