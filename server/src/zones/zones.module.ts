import { Module } from '@nestjs/common';
import { ZonesService } from './zones.service';
import { ZonesController } from './zones.controller';

@Module({
  providers: [ZonesService],
  controllers: [ZonesController]
})
export class ZonesModule {}
