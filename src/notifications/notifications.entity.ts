import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Notifications {
  @Column()
  user_id: number;

  @Column()
  content: string;

  @Column()
  used_flag: string;

  @PrimaryGeneratedColumn()
  notification_id: number;
}
