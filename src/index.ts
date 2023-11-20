import { Biblioteca } from "./Biblioteca";

const input = require('prompt-sync')()


const menu = `O que gostaria de fazer?
1 - Cadastrar usuário
2 - Remover usuário
3 - Cadastrar autor
4 - Remover autor
5 - Cadastrar livro
6 - Remover livro
7 - Emprestar livro
8 - Devolver livro
9 - Sair`

console.log('--------------- Bem Vindo a Biblioteca Oráculo ---------------')

do {
    const biblioteca = Biblioteca.getInstance()
    console.log(menu)
    var opcao = input('Digite sua opção: ')
    switch (opcao) {
        case "1": 
            var nome = input('Digite o nome do usuário: ')
            var email = input('Digite o e-mail do usuário: ')
            biblioteca.adicionarUsuario(nome, email);
            break;
        case "2":
            var email = input('Digite o e-mail do usuário: ')
            biblioteca.removerUsuario(email)
            ;
            break;
        case "3":
            var nome = input('Digite o nome do autor: ');
            var dtNasc = input('Digite a data de nascimento do autor: ')
            var nacionalidade = input('Digite a nacionalidade do autor: ')
            biblioteca.adicionarAutor(nome, dtNasc, nacionalidade)
            break;
        case "4":
            var nome = input('Digite o nome completo do autor que deseja remover: ')
            biblioteca.removerAutor(nome);
            break;
        case "5":
            var titulo = input('Digite o título do livro para cadastro: ')
            var quantidade = input('Digite a quantidade de livros deste título que serão cadastrados: ')
            var autor = input('Digite o nome do autor do livro: ')
            var anoPublicacao = input('Digite o ano de publicação do livro: ')
            var genero = input('Digite o gênero do livro: ');
            biblioteca.adicionarLivro(quantidade, titulo, autor, anoPublicacao, genero)
            break;
        case "6": 
            var id = input('Digite o id do livro a ser excluido do sistema: ')
            biblioteca.removerLivro(id)
            break;
        case "7": 
            var id = input('Digite o id do livro a ser emprestado: ')
            var nome = input('Digite o nome do usuário a ser emprestado o livro: ')
            biblioteca.emprestarLivro(id, nome)
            break;
        case "8": 
            var id = input('Digite o id do livro a ser devolvido: ')
            var nome = input('Digite o nome do usuário que está devolvendo o livro: ')
            biblioteca.devolverLivro(id, nome)
            break;
        case "9": 
            console.log('Obrigado por utilizar a biblioteca Oráculo, até mais!');
            break;
        default:
            console.log("Opção inválida!");
            break;
    }

} while (opcao !== '9');





