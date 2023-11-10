import { Entity, PrimaryGeneratedColumn, Column} from "typeorm"
import { EntidadeBase } from "./EntidadeBase"

@Entity()
export class Filme extends EntidadeBase{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nameFilme: string

    @Column()
    descricao: string

    @Column()
    atorPrincipal: string

    @Column()
    anoLancamento: number

    @Column()
    bilheteriaCinema: number

    @Column()
    diretor: string

    @Column()
    streamingPosCinema: string

}
