import { Livro } from "../Livro"

class Usuario {
    nome : string
    email : string
    livrosEmprestados : Livro[] = []
}

export {Usuario}