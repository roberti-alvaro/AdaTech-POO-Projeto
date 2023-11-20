import { Autor } from "../Autor";
import { Livro } from "../Livro";
import { Logger } from "../Logger";
import { Usuario } from "../Usuario";

class Biblioteca {

private livros: Livro[] = [];
private autores: Autor[] = [];
private usuarios: Usuario[] = [];

adicionarLivro(livro : Livro): void {

    const novoLivro = new Logger('livros.json')
    novoLivro.logLivros(livro)

}

removerLivro(livro: Livro): void {
    const log = new Logger('livros.json')
    const livros = log.readLogs()
    const index = livros.indexOf(livro);
    if (index !== -1) {
    this.livros.splice(index, 1)
    log.writeLogs(livros)
    }
}
}
const José = new Autor("Jose", new Date(1992,12,1), "Estadunidense")
const novoLivro = new Livro(1, "O livro 1", José, 2017, "Ficção")
const Alvaro = new Autor("Alvaro", new Date(1991,9,12), "Brasileiro")
const novoLivro2 = new Livro(1, "O livro 2", Alvaro, 2023, "Ação")

const addLivro = new Biblioteca()
addLivro.adicionarLivro(novoLivro)
addLivro.adicionarLivro(novoLivro2)

const remover = addLivro.removerLivro(novoLivro)