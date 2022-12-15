import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity({ name: 'nhaxuatban' })
export class Nhaxuatban {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  createdAt: Date;
  @Column()
  updateAt: Date;
}
