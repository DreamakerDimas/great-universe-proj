import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateZoneDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  readonly zone_name?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  readonly disp_name?: string;

  @IsOptional()
  @IsString()
  readonly description?: string;

  @IsOptional()
  @IsString()
  government_type?: string;

  @IsOptional()
  @IsString()
  emblem_img?: string;

  @IsOptional()
  @IsString()
  tags?: string; // tag link
}
