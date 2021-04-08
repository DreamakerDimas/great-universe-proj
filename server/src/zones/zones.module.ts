import { Module } from '@nestjs/common';
import { ZonesService } from './zones.service';
import { ZonesController } from './zones.controller';
import { ZoneEntity } from 'src/entities/zone.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [ZonesService],
  imports: [TypeOrmModule.forFeature([ZoneEntity])],
  controllers: [ZonesController],
})
export class ZonesModule {}
