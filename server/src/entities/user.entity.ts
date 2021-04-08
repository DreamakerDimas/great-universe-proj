import { UserRoles } from 'src/enums/user-roles.enum';
import {
  Column,
  CreateDateColumn,
  Entity,
  ObjectID,
  ObjectIdColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class UserEntity {
  @ObjectIdColumn() id: ObjectID;

  @Column({ unique: true }) login: string;

  @Column({ unique: true }) email: string;

  @Column({ select: false }) password: string;

  @Column()
  role: UserRoles;

  @Column()
  avatar: string; // this will be url

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
