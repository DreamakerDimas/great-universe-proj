import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity({ name: 'zones' })
export class ZoneEntity {
  @ObjectIdColumn() id: ObjectID;

  @Column({ unique: true }) zone_name: string;

  @Column() disp_name: string;

  @Column() description: string;

  @Column()
  government_type: string;

  @Column()
  emblem_img: string;

  @Column()
  tags: string; // tag link
}
