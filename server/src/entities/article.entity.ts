import { UserRoles } from 'src/enums/user-roles.enum';
import {
  Column,
  CreateDateColumn,
  Entity,
  ObjectID,
  ObjectIdColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'articles' })
export class ArticleEntity {
  @ObjectIdColumn() id: ObjectID;

  @Column({ nullable: false }) title: string;

  @Column({ nullable: false }) content: string;

  @Column({ nullable: false }) author: ObjectID;

  @Column() isApproved: boolean;

  @Column() likedBy: ObjectID[];

  @Column() comments: [];

  @Column() tags: [];

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
