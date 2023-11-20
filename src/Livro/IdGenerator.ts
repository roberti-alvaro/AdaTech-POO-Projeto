class IdGenerator {
    private static instance: IdGenerator
    private static nextId: number = 1
  
    private constructor() {
    }
  
    static getInstance(): IdGenerator {
      if (!IdGenerator.instance) {
        IdGenerator.instance = new IdGenerator()
      }
      return IdGenerator.instance
    }
  
    static getNextId(): number {
      return this.nextId++
    }
  }

  export { IdGenerator }
  