import * as express from "express"
import * as bodyParser from "body-parser"
import { Request, Response } from "express"
import { AppDataSource } from "./data-source"
import { Routes } from "./routes"
import { User } from "./entity/User"
import { Questao } from "./entity/Questao"
import { Filme } from "./entity/Filme"

AppDataSource.initialize().then(async () => {

    // create express app
    const app = express()
    const cors=require('cors')
    app.use(bodyParser.json())
    app.use(cors())

    // register express routes from defined application routes
    Routes.forEach(route => {
        (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
            const result = (new (route.controller as any))[route.action](req, res, next)
            if (result instanceof Promise) {
                result.then(result => result !== null && result !== undefined ? res.send(result) : undefined)

            } else if (result !== null && result !== undefined) {
                res.json(result)
            }
        })
    })

    // setup express app here
    // ...

    // start express server
    app.listen(3000)

    // insert new users for test
    await AppDataSource.manager.save(
        AppDataSource.manager.create(User, {
            firstName: "Timber",
            lastName: "Saw",
            age: 27
        })
    )

    await AppDataSource.manager.save(
        AppDataSource.manager.create(Questao, {
            enunciado: "Qual e a alternativa",
            alternativa1: "Primeiro",
            alternativa2: "Segundo",
            alternativa3: "Terceiro",
            alternativa4: "Quarto",
            alternativa5: "Quinta",
            resposta: "Segunda"
        })
    )

    await AppDataSource.manager.save(
        AppDataSource.manager.create(Filme, {
            nameFilme: "Oppenheimer", 
            descricao: "O físico J. Robert Oppenheimer trabalha com uma equipe de cientistas durante o Projeto Manhattan, levando ao desenvolvimento da bomba atômica", 
            atorPrincipal: "Cillian Murphy", 
            anoLancamento: 2023, 
            bilheteriaCinema: 800000000,
            diretor: "Christopher Nolan",
            streamingPosCinema: "HBO Max"
        })
    )

    console.log("Express server has started on port 3000. Open http://localhost:3000/users to see results")

}).catch(error => console.log(error))
