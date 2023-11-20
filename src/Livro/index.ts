import { IdGenerator } from "./IdGenerator"

class Livro{
    id = IdGenerator.getInstance().getNextId()
    quantidade : number
    titulo : string
    autor : any
    anoPublicacao : number
    genero : string

    constructor (quantidade : number, titulo : string, autor : any , anoPublicacao : number, genero : string) {
        this.quantidade = quantidade
        this.titulo = titulo
        this.autor = autor
        this.anoPublicacao = anoPublicacao
        this.genero = genero

    }

}

export {Livro}