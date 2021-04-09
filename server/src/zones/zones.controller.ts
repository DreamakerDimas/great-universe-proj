import { Controller, Delete, Get, Param, Post, Request } from '@nestjs/common';
import { ZoneEntity } from 'src/entities/zone.entity';
import { ZonesService } from './zones.service';

// guards
@Controller('zones')
export class ZonesController {
  constructor(private zonesService: ZonesService) {}

  @Post()
  async create(@Request() req): Promise<ZoneEntity | null> {
    return this.zonesService.create(req.body);
  }

  @Get('/findById/:id')
  async findById(@Param('id') id: string): Promise<ZoneEntity | null> {
    return this.zonesService.findById(id);
  }

  @Get('/:zone_name')
  async findByZoneName(
    @Param('zone_name') zone_name: string,
  ): Promise<ZoneEntity | null> {
    let result;
    const zone = await this.zonesService.findByZoneName(zone_name);
    result = zone;
    if (!zone) result = { zone_name, isEmpty: true };
    return result;
  }

  @Post('update/:id')
  async update(
    @Param('id') id: string,
    @Request() req,
  ): Promise<ZoneEntity | null> {
    return this.zonesService.updateById(id, req.body);
  }

  @Delete('/:id')
  async remove(@Param('id') id: string): Promise<boolean> {
    return this.zonesService.removeById(id);
  }
}
