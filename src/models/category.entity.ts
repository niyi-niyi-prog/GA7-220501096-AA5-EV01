import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Transaction } from "./transaction.entity";

@Entity()
export class Category {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nameCategory: string

    @OneToOne(() => Transaction, (transaction) => transaction.category)
    transaction?: Transaction;
}