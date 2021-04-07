import { UserRoles } from 'src/enums/user-roles.enum';
import { ObjectID } from 'typeorm';

export class ReturnUserDto {
  id: ObjectID;

  login: string;

  email: string;

  role: UserRoles;

  avatar: string;

  createdAt: Date;

  updatedAt: Date;
}
