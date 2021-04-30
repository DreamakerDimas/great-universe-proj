import {
  IsNotEmpty,
  IsString,
  IsMongoId,
  IsArray,
  IsBoolean,
} from 'class-validator';

export class DefaultArticleDto {
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

  @IsBoolean()
  readonly isApproved: boolean;

  @IsArray()
  readonly comments: [];

  @IsArray()
  readonly likedBy: [];
}
