import {IsNotEmpty, IsString, IsArray, IsOptional} from 'class-validator';

export class UpdateTagDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly code_name: string;

  @IsArray()
  readonly related_tags: [];

  @IsArray()
  readonly child_tags: [];

  @IsString()
  @IsOptional()
  readonly color: string;
}
