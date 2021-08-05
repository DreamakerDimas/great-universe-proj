import {
  IsNotEmpty,
  IsString,
  IsMongoId,
  IsArray,
  IsBoolean,
} from 'class-validator';
import {ObjectID} from 'typeorm';

export class CreateArticleDto {
  @IsString()
  @IsNotEmpty()
  readonly title: string; // title (need index for search?)

  @IsString()
  @IsNotEmpty()
  readonly type: string; // type enum (db?)

  @IsString()
  @IsNotEmpty()
  readonly content: string; // content (html?)

  @IsMongoId()
  readonly author: string; // author user id

  @IsArray()
  readonly tags: []; // array of tags paths

  @IsArray()
  readonly comments: []; // array of comments

  @IsBoolean()
  readonly is_approved: boolean; // is approved by moderator

  @IsArray()
  readonly liked_by: []; // array of users id

  @IsString()
  readonly code_name: string;
  // code_name for building link (transliterate from title & add some random numbers)
}
