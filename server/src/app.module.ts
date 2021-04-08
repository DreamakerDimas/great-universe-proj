import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { AuthController } from './auth/auth.controller';
import { ZonesModule } from './zones/zones.module';

@Module({
  imports: [TypeOrmModule.forRoot(), UsersModule, AuthModule, ZonesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
