import { LoaiSach } from 'src/loai-sach/entities/loai-sach.entity';
import { Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

export class TheLoai {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  createdAt: Date;
  @Column()
  updateAt: Date;
  @ManyToOne(() => LoaiSach, (loaiSach) => loaiSach.theLoais)
  loaiSach: LoaiSach;
}
