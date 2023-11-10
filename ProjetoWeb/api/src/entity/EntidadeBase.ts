import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class EntidadeBase {

    @PrimaryGeneratedColumn()
    id: number

    @CreateDateColumn({type: "timestamp"})
    dateCriacao: Date


    @UpdateDateColumn({type: "timestamp"})
    dateAlteracao: Date
}