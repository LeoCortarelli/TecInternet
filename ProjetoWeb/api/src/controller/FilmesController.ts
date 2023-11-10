import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import {Filme} from "../entity/Filme"
import { ControleBase } from "./ControleBase"

export class FilmeController extends ControleBase {

    private userRepository = AppDataSource.getRepository(Filme)

    async all(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.find()
    }

    async one(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)


        const filme = await this.userRepository.findOne({
            where: { id }
        })

        if (!filme) {
            return "unregistered user"
        }
        return filme
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const { nameFilme, descricao, atorPrincipal, anoLancamento, bilheteriaCinema, diretor, streamingPosCinema} = request.body;

        this.isRequirid(nameFilme,"Valor nome do filme necessario")
        this.isRequirid(descricao,"Valor descrição do filme necessario")
        this.isRequirid(atorPrincipal,"Valor ator principal do filme necessario")
        this.isRequirid(anoLancamento,"Valor ano de lancamento do filme necessario")
        this.isRequirid(bilheteriaCinema,"Valor bilheteria do filme no cinema necessario")
        this.isRequirid(diretor,"Valor diretor do filme no cinema necessario")
        this.isRequirid(streamingPosCinema,"Valor streaming do filme no cinema necessario")
        console.log(this.notificacoes)


        this.validaMinimoCaracteresFilmes(nameFilme, "O nome do filme e curto demais")
        this.validaMinimoCaracteresFilmes(descricao, "O a descrição do filme e curto demais")
        this.validaMinimoCaracteresFilmes(atorPrincipal, "O nome do ator do filme e curto demais")
        this.validaMinimoCaracteresFilmes(diretor, "O nome do diretor do filme e curto demais")

        this.validaMaximoCaracteresFilmes(nameFilme, "O nome do filme e atingiu o maximo de caracteres")
        this.validaMaximoCaracteresFilmes(atorPrincipal, "O nome do ator do filme atingiu o maximo de caracteres")
        this.validaMaximoCaracteresFilmes(diretor, "O nome do diretor do filme atingiu o maximo de caracteres")

        this.validaMaximoCaracteresFilmesDescricao(descricao, "A descricao ultrapassou o limite de caracteres")

        this.validaAnoFilmes(anoLancamento, "O ano está invalido")

        this.validaBilheteria(bilheteriaCinema, "O filme deve ter passado pelo cinema !!")

        if(!this.valid()){
            return{
            status:400,
            errors: this.notificacoes
        }
    }

        const filme = Object.assign(new Filme(), {
            nameFilme, 
            descricao, 
            atorPrincipal, 
            anoLancamento, 
            bilheteriaCinema,
            diretor,
            streamingPosCinema
        })

        return this.userRepository.save(filme)
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)

        let filmeToRemove = await this.userRepository.findOneBy({ id })

        if (!filmeToRemove) {
            return "this user not exist"
        }

        await this.userRepository.remove(filmeToRemove)

        return "user has been removed"
    }

}