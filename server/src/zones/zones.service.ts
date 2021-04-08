import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ZoneEntity } from 'src/entities/zone.entity';
import { Repository } from 'typeorm';
import { CreateZoneDto } from './dto/create-zone.dto';

@Injectable()
export class ZonesService {
  constructor(
    @InjectRepository(ZoneEntity)
    readonly zoneRepository: Repository<ZoneEntity>,
  ) {
    // this.create({
    //   zone_name: 'Warp',
    //   disp_name: 'Варп штормы',
    //   description: '',
    // });
  }

  async create(zone: CreateZoneDto): Promise<ZoneEntity | null> {
    const createdZone = await this.zoneRepository.save(zone);
    return createdZone;
  }

  async findById(id: string): Promise<ZoneEntity | null> {
    return await this.zoneRepository.findOne(id);
  }

  async findByZoneName(zone_name: string): Promise<ZoneEntity | null> {
    return await this.zoneRepository.findOne({ zone_name });
  }

  async updateById(id: string, updateData): Promise<ZoneEntity | null> {
    await this.zoneRepository.update(id, updateData);
    return await this.zoneRepository.findOne(id);
  }

  async removeById(id: string): Promise<boolean> {
    await this.zoneRepository.delete(id);
    const zone = await this.zoneRepository.findOne(id);
    if (zone) return false;
    return true;
  }
}
