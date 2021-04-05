import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    readonly userRepository: Repository<UserEntity>,
  ) {
    // this.create({
    //   login: 'test2',
    //   email: 'test2@test.com',
    //   password: 'password',
    // });
  }

  async create(user: CreateUserDto): Promise<UserEntity | null> {
    // pass hash
    const newUser = await this.userRepository.save(user);
    console.log(newUser);
    return newUser;
  }
}
