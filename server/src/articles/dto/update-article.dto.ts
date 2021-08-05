import {
  IsNotEmpty,
  IsString,
  IsArray,
  IsBoolean, IsOptional,
} from 'class-validator';
import {ObjectID} from 'typeorm';

export class UpdateArticleDto {
    @IsOptional()
    @IsString()
    @IsNotEmpty()
    readonly title: string; // title (need index for search?)

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    readonly type: string; // type enum (db?)

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    readonly content: string; // content (html?)

    @IsOptional()
    @IsArray()
    readonly tags: []; // array of tags paths

    @IsOptional()
    @IsArray()
    readonly comments: []; // array of comments

    @IsOptional()
    @IsBoolean()
    readonly is_approved: boolean; // is approved by moderator

    @IsOptional()
    @IsArray()
    readonly liked_by: []; // array of users id

    @IsOptional()
    @IsString()
    readonly code_name: string;
    // code_name for building link (transliterate from title & add some random numbers)
}
