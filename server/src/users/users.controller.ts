import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { ReturnUserDto } from './dto/return-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get('/getUser')
  async getProfile(@Request() req): Promise<ReturnUserDto | null> {
    const { id } = req.user;
    return await this.usersService.findOneById(id);
  }
}
