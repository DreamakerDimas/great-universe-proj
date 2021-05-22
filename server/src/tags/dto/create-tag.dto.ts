import { IsNotEmpty, IsString, IsArray, IsOptional } from 'class-validator';

export class CreateTagDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly code_name: string;

  @IsOptional()
  @IsArray()
  readonly related_tags?: []; // empty

  @IsOptional()
  @IsArray()
  readonly child_tags?: []; // empty
  
  @IsOptional()
  @IsArray()
  readonly color?: string; // hex
}
