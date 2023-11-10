export abstract class ControleBase{

        notificacoes : Array<{mensagens:string}>


        constructor(){
            this.notificacoes = new Array <{mensagens:string}>()
        }


        addNotificacao(mensagem:string): void{
            this.notificacoes.push({mensagens:mensagem})
        }

        get retornaNotificacoes(): Array <{mensagens:string}>{
            return this.notificacoes
        }

        valid(): boolean{
            return this.notificacoes.length == 0;
        }

        isRequirid(value,mensagem){
            if(!value || value.length <= 0){
                this.addNotificacao(mensagem)
            }
        }

       validaMinimoCaracteresFilmes(value,mensagem){
            if(value.length <= 2){               // validação 1
                this.addNotificacao(mensagem)
            }
       } 

       validaMaximoCaracteresFilmes(value,mensagem){
            if(value.length >= 30){             // validação 2
                this.addNotificacao(mensagem)
            }
       }

       validaAnoFilmes(value:number,mensagem){
            const anoAtual = new Date().getFullYear() 
                                                        // validação 3
            if(value < 1887 || value > anoAtual){
                this.addNotificacao(mensagem)
            }
       }

       validaBilheteria(value,mensagem){
            const valorNum = parseFloat(value)
                                                        // validação 4
            if(isNaN(valorNum) || valorNum <= 0){
                this.addNotificacao(mensagem)
            }
       }

       validaMaximoCaracteresFilmesDescricao(value,mensagem){
            if(value.length >= 300){                            // validação 5
                this.addNotificacao(mensagem)
            }
       }


}