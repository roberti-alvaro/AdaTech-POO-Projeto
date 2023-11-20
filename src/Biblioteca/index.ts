import { log } from "console";
import { Autor } from "../Autor";
import { Livro } from "../Livro";
import { Logger } from "../Logger";
import { Usuario } from "../Usuario";

class Biblioteca {
    
    private static instance: Biblioteca
  
    private constructor() {
    }
  
    static getInstance(): Biblioteca {
      if (!Biblioteca.instance) {
        Biblioteca.instance = new Biblioteca()
      }
      return Biblioteca.instance
    }

adicionarLivro(quantidade : number, titulo : string, autor : string, anoPublicacao : number, genero : string): void {
    
    const logAutor = new Logger('autores.json')
    const autores = logAutor.readLogs()
    const pegarAutor = autores.filter(o => o.Nome === autor)

    const novoLivro = new Livro(quantidade, titulo, pegarAutor, anoPublicacao, genero)

    const novoLogLivros = new Logger('livros.json')
    novoLogLivros.logLivros(novoLivro)

}
s

removerLivro(id: number): void {
    const log = new Logger('livros.json')
    const lista = log.readLogs()
    const index = lista.findIndex((item) => item.id === id)
    if (index !== -1) {
    lista.splice(index, 1)
    log.writeLogs(lista)
    }
}

adicionarAutor(nome : string, dataNasc : string, nacionalidade : string): void {

    const novoAutor = new Autor(nome, dataNasc, nacionalidade)
    const novoLogAutor = new Logger('autores.json')
    novoLogAutor.logAutor(novoAutor)

}

removerAutor(nome : string): void {
    const log = new Logger('autores.json')
    const lista = log.readLogs()
    const index = lista.findIndex((item) => item.Nome === nome)
    if (index !== -1) {
    lista.splice(index, 1)
    log.writeLogs(lista)
    }
}

adicionarUsuario(nome : string, email : string): void {

    const novoUsuario = new Usuario(nome, email)
    const novoLogUsuarios = new Logger('usuarios.json')
    novoLogUsuarios.logUsuario(novoUsuario)

}

removerUsuario(email : string): void {
    const log = new Logger('usuarios.json')
    const listaUsuarios = log.readLogs()
    const index = listaUsuarios.findIndex((item) => item.email === email)
    if (index !== -1) {
    listaUsuarios.splice(index, 1)
    log.writeLogs(listaUsuarios)
    }
}

emprestarLivro (id : number, usuario : string): void  {
        const logLivros = new Logger('livros.json')
        const livros = logLivros.readLogs();
        const livro = livros.find((item) => item.id === id && item.Quantidade > 0 )
        if (livro) {
            const emprestar = new Logger('emprestados.json')
            emprestar.logEmprestar(livro.Título, usuario)
            const index = livros.findIndex((item) => item.id === id)
            livro.Quantidade -= 1
            livros.splice(index, 1, livro)
            logLivros.writeLogs(livros);
        } else {
            console.log('Não será possível emprestar o livro, pois todos exemplares deste título estão emprestados');
        }
}

devolverLivro (id : number, emailUsuario : string): void  {
    const logLivros = new Logger('livros.json')
    const livros = logLivros.readLogs();
    const livro = livros.find((item) => item.id === id)
    if (livro) {
        const devolver = new Logger('devolvidos.json')
        devolver.logEmprestar(livro.Título, emailUsuario)
        const index = livros.findIndex((item) => item.id === id)
        livro.Quantidade += 1
        livros.splice(index, 1, livro)
        logLivros.writeLogs(livros);
    }
}

listarTodosLivros() {
    const logLivros = new Logger('livros.json')
    const todosLivros = console.log(JSON.stringify(logLivros.readLogs()).split(',').join('\n'));
    
}

}