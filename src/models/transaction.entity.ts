import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Account } from "./account.entity";
import { Category } from "./category.entity";

@Entity()
export class Transaction {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    value: number

    @Column()
    date: Date

    @OneToOne(() => Account)
    @JoinColumn()
    account: Account

    @OneToOne(() => Category)
    @JoinColumn()
    category: Category

} 