import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity({ name: 'tags_tree' })
export class TagEntity {
  @ObjectIdColumn() id: ObjectID;

  @Column({ nullable: false }) name: string;

  @Column({ nullable: false }) code_name: string;

  @Column() related_tags: []; // this will be array with array of string path (from tag ids or code_name)
  // expl: [['1', '1.2', '1.2.5'], ['3', '3.2']]
  // will add this tags to article when tag is chosen (they could be removed!! UI)

  @Column() child_tags: []; // tag entity (deep tree) (child tag could have childs too, and so on)
}
