import { Autor } from "../Autor"
import { IdGenerator } from "./IdGenerator"

class Livro{
    id : number = IdGenerator.getNextId()
    quantidade : number
    titulo : string
    autor : Autor
    anoPublicacao : number
    genero : string

    constructor (quantidade : number, titulo : string, autor : Autor , anoPublicacao : number, genero : string) {
        this.quantidade = quantidade
        this.titulo = titulo
        this.autor = autor
        this.anoPublicacao = anoPublicacao
        this.genero = genero
    }

}

export {Livro}