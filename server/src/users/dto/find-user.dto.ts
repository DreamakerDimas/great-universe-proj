import { IsOptional } from 'class-validator';
import { UserRoles } from 'src/enums/user-roles.enum';

export class FindUserDto {
  @IsOptional()
  readonly login: string;

  @IsOptional()
  readonly email: string;

  @IsOptional()
  readonly role: UserRoles;
}
