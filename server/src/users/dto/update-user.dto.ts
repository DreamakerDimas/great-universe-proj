import { IsEmail, IsOptional, MinLength } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @MinLength(3)
  readonly login: string;

  @IsOptional()
  @IsEmail()
  readonly email: string;

  @IsOptional()
  readonly avatar: string;
}
