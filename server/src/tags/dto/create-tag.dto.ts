import {
  IsNotEmpty,
  IsString,
  IsMongoId,
  IsArray,
  IsOptional,
} from 'class-validator';

export class CreateArticleDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly code_name: string;

  @IsArray()
  readonly parents_tree: []; // arr of parents tags code_name

  @IsOptional()
  @IsArray()
  readonly related_tags?: []; // empty

  @IsOptional()
  @IsArray()
  readonly child_tags?: []; // empty
}
