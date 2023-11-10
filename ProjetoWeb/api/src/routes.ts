import { FilmeController } from "./controller/FilmesController"
import { UserController } from "./controller/UserController"
import { QuestaoController } from "./controller/QuestaoController"

export const Routes = [{
    method: "get",
    route: "/users",
    controller: UserController,
    action: "all"
}, {
    method: "get",
    route: "/users/:id",
    controller: UserController,
    action: "one"
}, {
    method: "post",
    route: "/users",
    controller: UserController,
    action: "save"
}, {
    method: "delete",
    route: "/users/:id",
    controller: UserController,
    action: "remove"
},{
    method: "get",
    route: "/filme",
    controller: FilmeController,
    action: "all"
}, {
    method: "get",
    route: "/filme/:id",
    controller: FilmeController,
    action: "one"
}, {
    method: "post",
    route: "/filme",
    controller: FilmeController,
    action: "save"
}, {
    method: "delete",
    route: "/filme/:id",
    controller: FilmeController,
    action: "remove"
},{
    method: "get",
    route: "/questoes",
    controller: QuestaoController,
    action: "all"
}, {
    method: "get",
    route: "/questoes/:id",
    controller: QuestaoController,
    action: "one"
}, {
    method: "post",
    route: "/questoes",
    controller: QuestaoController,
    action: "save"
}, {
    method: "delete",
    route: "/questoes/:id",
    controller: QuestaoController,
    action: "remove"
}]