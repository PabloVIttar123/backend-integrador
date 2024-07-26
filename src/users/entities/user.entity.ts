import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { hashPassword } from 'src/common/utils/hashPassword.utils';
import { log } from 'console';

@Entity('users')
export class Users {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('text')
  nombre: string;
  @Column('text')
  apellido: string;
  @Column('text')
  email: string;
  @Column('text', { select: false })
  password: string;

  // @BeforeInsert()
  // hashPassword() {
  //   console.log(hashPassword(this.password));

  //   this.password = hashPassword(this.password);
  // }
}
