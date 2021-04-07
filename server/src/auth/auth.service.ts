import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ReturnUserDto } from 'src/users/dto/return-user.dto';
import { UsersService } from 'src/users/users.service';
import { comparePasswords } from './auth.functions';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {
    // this.register({
    //   login: 'test1',
    //   email: 'test1@test.com',
    //   password: 'password',
    // });
    // this.validateUser('606db33ee1cd287ef339e080', 'password');
  }

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneWithPassword(email);

    const isSamePasswords = await comparePasswords(pass, user.password);
    if (user && isSamePasswords) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: ReturnUserDto) {
    const { id, role } = user;
    const payload = { sub: id, role };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  // async register(userData: CreateUserDto) {
  //   try {
  //     const createdUser = await this.usersService.create(userData);
  //     const { password, ...result } = createdUser;
  //     return result;
  //   } catch (error) {
  //     throw error;
  //   }
  // }
}
