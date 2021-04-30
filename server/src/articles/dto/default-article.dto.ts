import {
  IsNotEmpty,
  IsString,
  IsMongoId,
  IsArray,
  IsBoolean,
} from 'class-validator';
import { ObjectID } from 'typeorm';

export class DefaultArticleDto {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsString()
  @IsNotEmpty()
  readonly content: string;

  @IsMongoId()
  readonly author: ObjectID;

  @IsArray()
  readonly tags: [];

  @IsBoolean()
  readonly isApproved: boolean;

  @IsArray()
  readonly comments: [];

  @IsArray()
  readonly likedBy: [];
}
