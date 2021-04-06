import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/entities/user.entity';
import { Like, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { FindUserDto } from './dto/find-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

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
    try {
      return this.userRepository.save(user);
    } catch (error) {
      throw error;
    }
  }

  async findOneById(id: string): Promise<UserEntity | null> {
    return this.userRepository.findOneOrFail(id);
  }

  async find(user: FindUserDto): Promise<UserEntity[] | null> {
    // add offset + limit + order
    const { login, email, role } = user;
    const where = {
      login: Like(`%${login}%`),
      email: Like(`%${email}%`),
      role,
    };
    return this.userRepository.find({ where, order: { createdAt: 'DESC' } }); // count + haveMore
  }

  async updateById(
    id: string,
    updateData: UpdateUserDto,
  ): Promise<UserEntity | null> {
    const user = await this.userRepository.findOneOrFail(id);

    if (!user) {
      console.error("User didn't found.");
    }

    await this.userRepository.update(id, updateData);
    return await this.userRepository.findOne(id);
  }

  async updatePasswordById() {
    //
  }

  async updateRoleById() {
    //
  }

  async remove(id: string): Promise<boolean> {
    await this.userRepository.delete(id);

    const user = await this.userRepository.findOne(id);
    if (user) return false;

    return true;
  }
}
