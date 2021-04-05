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
    return this.userRepository.save(user);
  }
  
  async findOneById(id: string): Promise<UserEntity | null> {
    return this.userRepository.findOne({ id });
  }
  
  async find(user: FindUserDTO): Promise<UserEntity[] | null> {
    return this.userRepository.find(user);
  }
  
  async updateById(id: string, updateData: UpdateUserDTO): Promise<UserEntity | null> {
    await this.userRepository.findOneAndUpdate({ id }, updateData);
    return this.findOneById(id);
  } 
  
  async remove(id: string): Boolean {
    await this.userRepository.delete(id);
    return true;
  } 
}
