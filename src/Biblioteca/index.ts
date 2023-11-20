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
// const José = new Autor("Jose", new Date(1992,12,1), "Estadunidense")
// const novoLivro = new Livro(4, "O livro 1", José, 2017, "Ficção")
// const Alvaro = new Autor("Alvaro", new Date(1991,9,12), "Brasileiro")
// const novoLivro2 = new Livro(1, "O livro 2", Alvaro, 2023, "Ação")
// const Maria = new Autor("Maria", new Date(1999,1,20), "Brasileiro")
// const novoLivro3 = new Livro(5, "O livro 3", Maria, 2022, "Ação")
// const Joao = new Autor("Joao", new Date(1990,8,25), "Brasileiro")
// const novoLivro4 = new Livro(20, "O livro 4", Joao, 2010, "Aventura")

const biblioteca = Biblioteca.getInstance()
// biblioteca.adicionarAutor('Alvaro', '12/09/1991', 'Brasileiro')
// biblioteca.adicionarAutor('Jose', '20/01/1987', 'Brasileiro')
// biblioteca.removerAutor('Jose')
// biblioteca.adicionarLivro(4, 'Livro 1', 'Alvaro', 2020, 'Romance')
// biblioteca.adicionarUsuario('Mariazinha', 'mariazinha@gmail.com')
biblioteca.listarTodosLivros()
// biblioteca.removerLivro(2)
// biblioteca.removerLivro(3)

// biblioteca.removerAutor('Otavio')
// addLivro.adicionarLivro(4, 'A casa de vidro', 'Otavio', 2023, 'sci-fi')
// addLivro.adicionarLivro(novoLivro)
// addLivro.adicionarLivro(novoLivro2)
// addLivro.adicionarLivro(novoLivro3)
// addLivro.adicionarLivro(novoLivro4)

// addLivro.removerLivro(novoLivro2.id)