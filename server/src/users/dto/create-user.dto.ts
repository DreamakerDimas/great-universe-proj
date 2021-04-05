import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @MinLength(3)
  readonly login: string;

  @IsEmail()
  readonly email: string;

  @MinLength(6)
  password: string;
}
