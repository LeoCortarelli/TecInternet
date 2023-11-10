import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Filme } from "./entity/Filme"
import { Questao } from "./entity/Questao"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "bd_web",
    synchronize: true,
    logging: false,
    entities: [User, Filme, Questao],
    migrations: [],
    subscribers: [],
})
