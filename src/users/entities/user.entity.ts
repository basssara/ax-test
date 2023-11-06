import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { User as UserType } from 'src/types';

@Entity()
export class Personal {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @OneToOne(() => User, (user) => user.personal)
  user: User;
}

@Entity()
export class User implements UserType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @OneToOne(() => Personal, (personal) => personal.user)
  personal: Personal;

  @Column()
  phone_number: string;

  @Column()
  password: string;

  @Column({ default: 0 })
  rating: number;
}
