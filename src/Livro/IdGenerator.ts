import { Logger } from "../Logger"

// class IdGenerator {
  //   private static instance: IdGenerator
  //   private static lasttId: number
  //   private readonly filepath : string
  
  //   private constructor(filePath: string) {
  //     this.filePath = filePath;
  //     this.lastId = this.loadLastId();
  //   }
  
  //   static getInstance(): IdGenerator {
  //     if (!IdGenerator.instance) {
  //       IdGenerator.instance = new IdGenerator()
  //     }
  //     return IdGenerator.instance
  //   }
  
  //   static getNextId(): number {
  //     const logs = new Logger('ids.json')
  //     const idsLogLista = logs.readLogs()
  //     let idAtual = Object.values(idsLogLista)[0]
  //     this.nextId = idAtual++
  //     logs.logIdLivro(this.nextId)
  //     return this.nextId
  //   }
  // }
import * as fs from 'fs';

class IdGenerator {
  private static instance: IdGenerator;
  private lastId: number;

  private constructor() {
    this.lastId = this.loadLastId();
  }

  static getInstance(): IdGenerator {
    if (!IdGenerator.instance) {
      IdGenerator.instance = new IdGenerator();
    }
    return IdGenerator.instance;
  }

  private loadLastId(): number {
    try {
      const data = fs.readFileSync('ids.json', 'utf-8');
      const jsonData = JSON.parse(data);
      return jsonData.lastId || 0;
    } catch (error) {
      return 0;
    }
  }

  private saveLastId(): void {
    const data = { lastId : this.lastId };
    fs.writeFileSync('ids.json', JSON.stringify(data, null, 2), 'utf-8');
  }

  getNextId(): number {
    this.lastId++
    this.saveLastId()
    return this.lastId
  }
}

  export { IdGenerator }
  