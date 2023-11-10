import { IResultHttp } from "src/inteface/IResultHttp";
import { BaseService } from "./BaseService";
import { FilmeModel } from "src/model/FilmeModel";
import { HttpService } from "./HttpService";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
  
export class FilmeService  extends BaseService<FilmeModel> {

  

    constructor(public override http: HttpService) {
        super('filmes', http);
      }


}