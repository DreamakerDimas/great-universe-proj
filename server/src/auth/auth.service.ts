import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import { QueryFailedError } from 'typeorm';
import { comparePasswords, hashPassword } from './auth.functions';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {
    this.validateUser('606ca809e4248ed2393171cb', '123456');
  }

  async validateUser(id: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneById(id);

    const isSamePasswords = await comparePasswords(pass, user.password);
    if (user && isSamePasswords) {
      const { password, ...result } = user;
      console.log(result);
      return result;
    }
    return null;
  }

  public async register(userData: CreateUserDto) {
    const hashedPass = await hashPassword(userData.password);
    try {
      const createdUser = await this.usersService.create({
        ...userData,
        password: hashedPass,
      });
      return createdUser;
    } catch (error) {
      throw error;
    }
  }
}
