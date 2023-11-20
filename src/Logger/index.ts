import * as fs from 'fs';
import { Livro } from '../Livro';
import { Usuario } from '../Usuario';
import { Autor } from '../Autor';

class Logger {
  logFile: string;

  constructor(logFile: string) {
    this.logFile = logFile;
  }

  logEmprestar(livro: Livro, usuario : Usuario): void {
    const logEntry = {
      Data: new Date().toLocaleString(),
      LivroEmprestado: livro.titulo,
      Usuario: usuario.nome
    };

    const logs = this.readLogs();
    logs.push(logEntry);

    this.writeLogs(logs);
  }

  logLivros(livro: Livro): void {
    const logEntry = {
      Id : livro.id,
      Quantidade : livro.quantidade,
      Título: livro.titulo,
      Autor: livro.autor.nome,
      anoPublicacao: livro.anoPublicacao,
      Gênero : livro.genero
    };

    const logs = this.readLogs();
    logs.push(logEntry);

    this.writeLogs(logs);
  }

  logAutor(autor: Autor): void {
    const logEntry = {
      Nome : autor.nome,
      dtNasc : autor.dtNasc,
      Nacionalidade : autor.nacionalidade
    };

    const logs = this.readLogs();
    logs.push(logEntry);

    this.writeLogs(logs);
  }

  logUsuario(usuario: Usuario): void {
    const logEntry = {
      Nome : usuario.nome,
      email : usuario.email,
      LivrosEmprestados : usuario.livrosEmprestados
    };

    const logs = this.readLogs();
    logs.push(logEntry);

    this.writeLogs(logs);
  }

  readLogs(): any[] {
    try {
      const data = fs.readFileSync(this.logFile, 'utf-8');
      return JSON.parse(data);
    } catch (error) {
      return [];
    }
  }

  writeLogs(logs: string[]): void {
    fs.writeFileSync(this.logFile, JSON.stringify(logs, null, 2), 'utf-8');
  }
}

export { Logger }