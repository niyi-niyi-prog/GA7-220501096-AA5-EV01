import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";
import { Transaction } from "./transaction.entity";

@Entity()
export class Account {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nameAccount: string

    @ManyToOne(() => User, (user) => user.accounts)
    user: User;

    @OneToOne(() => Transaction, (transaction) => transaction.account)
    transaction?: Transaction;
}