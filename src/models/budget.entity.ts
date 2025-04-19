import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Budget {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    valueTotal: number

    @ManyToOne(() => User, (user) => user.accounts)
    user: User;

}