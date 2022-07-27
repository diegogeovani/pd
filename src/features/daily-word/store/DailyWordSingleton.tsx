import { DailyWord, DailyWordRepository } from '../application'

class DailyWordSingleton implements DailyWordRepository {
  private static instance: DailyWordSingleton

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}
  static getInstance = (): DailyWordSingleton => {
    return this.instance || (this.instance = new this())
  }

  findFirstOnes = (): DailyWord[] => {
    return [
      {
        message:
          'Bem-aventurado o homem que não anda segundo o conselho dos ímpios, nem se detém no caminho dos pecadores, nem se assenta na roda dos escarnecedores. Antes tem o seu prazer na lei do Senhor, e na sua lei medita de dia e de noite.',
        reference: {
          book: {
            name: 'Salmos',
          },
          chapter: 1,
          verses: new Set<number>([1, 2]),
        },
      },
    ]
  }
}

export default DailyWordSingleton
