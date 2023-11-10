// CLASSE PARA TRATAR REQUISIÇÕES

import {HttpClient, HttpHeaders} from '@angular/common/http'
import { IResultHttp } from 'src/inteface/IResultHttp'
import { Injectable } from '@angular/core' 

@Injectable({
    providedIn: 'root'
})

export class HttpService{

    constructor(private http:HttpClient){} // criando um construtor

    // Metodo para tratar GET,POST,PUT,DELETE
    // Ler o BODY da requisicao
    private createHeader(header?: HttpHeaders): HttpHeaders {
        if (!header) {
            header = new HttpHeaders();
        }

        header = header.append('Content-Type', 'application/json');
        header = header.append('Accept', 'application/json');
        header = header.append('Access-Control-Allow-Origin',"*")

        const token = localStorage.getItem('faind:token');
        if (token) {
        header = header.append('x-token-access', token);
        }

        return header;
    }
    
    //  ASSincrono
    // VOU REQUISITAR E TORCER PARA RESPONDER
    public get(url:string):Promise<IResultHttp>{
        return  new Promise(async(resolve)=>{
            try{
                const res = await this.http.get(url,{}).toPromise()
                resolve({sucesso:true,data:res,erro:undefined})
            }catch(error){
                resolve({sucesso:false,data:{},erro:error})
            }
        })

    }

    public post(url: string, model: any, headers?: HttpHeaders): Promise<IResultHttp> {
        const header = this.createHeader(headers);
        return new Promise(async (resolve) => {
          try {
           
            const res = await this.http.post(url, model, { headers: header }).toPromise();
            resolve({ sucesso: true, data: res, erro: undefined });        
          } catch (error) {     
            
            resolve({ sucesso: false, data: {}, erro:undefined});
          }
        });
      }
    
      public delete(url: string): Promise<IResultHttp> {
        const header = this.createHeader();    
        return new Promise(async (resolve) => {
          try {        
            const res = await this.http.delete(url, { headers: header }).toPromise();
            resolve({ sucesso: true, data: res, erro: undefined });       
          } catch (error) {        
            resolve({ sucesso: false, data: {}, erro:undefined});
          }
        });
      }

}