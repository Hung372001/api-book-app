import { PartialType } from '@nestjs/mapped-types';
import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { CreateTheLoaiDto } from './create-the-loai.dto';

export class UpdateTheLoaiDto extends PartialType(CreateTheLoaiDto) {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  createdAt: Date;
  @Column()
  updateAt: Date;
  //   @OneToOne(() => Profile)
  //   @JoinColumn()
  //   profile: Profile;
}
