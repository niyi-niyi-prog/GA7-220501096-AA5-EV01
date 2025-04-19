import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { Account } from './account.entity'
import { Budget } from './budget.entity'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id?: number

  @Column({ unique: true })
  username: string

  @Column()
  password: string

  @Column()
  name: string

  @Column()
  document: number

  @OneToMany(() => Account, (account) => account.user)
  accounts?: Account[];

  @OneToMany(() => Budget, (account) => account.user)
  budget?: Budget[];
}
