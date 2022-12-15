import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity({ name: 'tacgia' })
export class TacGia {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  createdAt: Date;
  @Column()
  updateAt: Date;
}
