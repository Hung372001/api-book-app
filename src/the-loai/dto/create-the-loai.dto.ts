import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class CreateTheLoaiDto {
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
