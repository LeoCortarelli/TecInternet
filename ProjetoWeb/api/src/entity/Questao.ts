import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Questao {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    enunciado: string


    @Column()
    alternativa1: string

    @Column()
    alternativa2: string

    @Column()
    alternativa3: string

    @Column()
    alternativa4: string

    @Column()
    alternativa5: string

    @Column()
    resposta: string

}
