// definir uma interface para as transações HTTP

// O IResultHttp vai transitar entre as chamadas

export interface IResultHttp {
    sucesso:boolean; // deu certo ou nao
    erro:any; // caso ocorra um erro
    data:any; // daos de retorno    
}