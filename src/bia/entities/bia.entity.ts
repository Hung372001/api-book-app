import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'bia' })
export class Bia {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  createdAt: Date;
  @Column()
  updateAt: Date;
}
