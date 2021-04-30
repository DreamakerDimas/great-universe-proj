import { IsNotEmpty, IsString, IsMongoId, IsArray } from 'class-validator';
import { ObjectID } from 'typeorm';

export class CreateArticleDto {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsString()
  @IsNotEmpty()
  readonly content: string;

  @IsMongoId()
  readonly author: string;

  @IsArray()
  readonly tags: [];
}
