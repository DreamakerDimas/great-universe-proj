import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import { comparePasswords } from './auth.functions';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {
    // this.register({
    //   login: 'test1',
    //   email: 'test1@test.com',
    //   password: 'password',
    // });
    // this.validateUser('606db33ee1cd287ef339e080', 'password');
  }

  async validateUser(id: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneWithPassword(id);

    const isSamePasswords = await comparePasswords(pass, user.password);
    if (user && isSamePasswords) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  public async register(userData: CreateUserDto) {
    try {
      const createdUser = await this.usersService.create(userData);
      const { password, ...result } = createdUser;
      return result;
    } catch (error) {
      throw error;
    }
  }
}
