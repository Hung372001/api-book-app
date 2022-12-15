import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class NhaCungCap {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  createdAt: Date;
  @Column()
  updateAt: Date;
}
