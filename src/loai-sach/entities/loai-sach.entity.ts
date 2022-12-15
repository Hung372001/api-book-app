import { TheLoai } from 'src/the-loai/entities/the-loai.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'loaisach' })
export class LoaiSach {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  createdAt: Date;
  @Column()
  updateAt: Date;
  @OneToMany(() => TheLoai, (theLoai) => theLoai.name)
  theLoais: TheLoai[];
}
