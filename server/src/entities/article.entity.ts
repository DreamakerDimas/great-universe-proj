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

  @Column({ nullable: false }) type: string; // articles types enum(id db?)

  @Column({ nullable: false }) content: string;

  @Column({ nullable: false }) author: string; // ObjID

  @Column() isApproved: boolean;

  @Column() likedBy: string[]; // arr of ObjID

  @Column() comments: []; // comment entity

  @Column() tags: []; // tag entity

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
