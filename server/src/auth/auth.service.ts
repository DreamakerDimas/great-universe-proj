import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
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
      access_token: 'Bearer ' + this.jwtService.sign(payload),
    };
  }

  async register(userData: CreateUserDto) {
    const createdUser = await this.usersService.create(userData);
    const { id, role } = createdUser;
    const payload = { sub: id, role };
    return {
      access_token: 'Bearer ' + this.jwtService.sign(payload),
    };
  }
}
