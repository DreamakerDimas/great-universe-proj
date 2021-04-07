import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { hashPassword } from 'src/auth/auth.functions';
import { UserEntity } from 'src/entities/user.entity';
import { UserRoles } from 'src/enums/user-roles.enum';
import { Like, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { FindUserDto } from './dto/find-user.dto';
import { ReturnUserDto } from './dto/return-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    readonly userRepository: Repository<UserEntity>,
  ) {
    // this.find({ login: 't', email: 't', role: UserRoles.user });
    // this.updateById('606db33ee1cd287ef339e080', { login: 'new_test1' });
  }

  async create(user: CreateUserDto): Promise<UserEntity | null> {
    const hashedPass = await hashPassword(user.password);
    const role = UserRoles.user;
    const avatar = '';
    return this.userRepository.save({
      ...user,
      password: hashedPass,
      role,
      avatar,
    });
  }

  async findOneById(id: string): Promise<ReturnUserDto | null> {
    const foundUser = await this.userRepository.findOneOrFail(id);
    const { password, ...result } = foundUser;

    return result;
  }

  async findOneWithPassword(email: string): Promise<UserEntity | null> {
    return this.userRepository.findOneOrFail({ email });
  }

  async find(user: FindUserDto): Promise<ReturnUserDto[] | null> {
    // add offset + limit + order
    const { login, email, role } = user;
    const where = {
      login: { $regex: `${login}`, $options: 'i' },
      email: { $regex: `${email}`, $options: 'i' },
      role,
    };

    const [foundedUsers, count] = await this.userRepository.findAndCount({
      where,
      order: { createdAt: 'DESC' },
      skip: 0,
      take: 10,
    }); // count + haveMore

    const resultArr = foundedUsers.map((user) => {
      const { password, ...returnUser } = user;
      return returnUser;
    });

    return resultArr;
  }

  async updateById(
    id: string,
    updateData: UpdateUserDto,
  ): Promise<ReturnUserDto | null> {
    await this.userRepository.update(id, updateData);

    const user = await this.userRepository.findOne(id);

    const { password, ...result } = user;
    return result;
  }

  async updatePasswordById(id: string, password: string) {
    const hashPass = await hashPassword(password);
    await this.userRepository.update(id, { password: hashPass });
  }

  async updateRoleById(id: string, role: UserRoles) {
    await this.userRepository.update(id, { role });
  }

  async remove(id: string): Promise<boolean> {
    await this.userRepository.delete(id);

    const user = await this.userRepository.findOne(id);
    if (user) return false;

    return true;
  }
}
