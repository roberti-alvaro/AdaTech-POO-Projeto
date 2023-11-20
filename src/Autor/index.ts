import { Livro } from "../Livro"

class Autor{
    nome : string
    dtNasc : Date
    nacionalidade : string

    constructor (nome : string, dtNasc : Date, nacionalidade : string) {
        this.nome= nome
        this.dtNasc = dtNasc
        this.nacionalidade = nacionalidade
    }
 }

export { Autor }