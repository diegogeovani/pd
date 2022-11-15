import { DailyWord, DailyWordRepository } from '../application'

class DailyWordSingleton implements DailyWordRepository {
  private static instance: DailyWordSingleton

  private words

  private constructor() {
    this.words = [
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

  static getInstance = (): DailyWordSingleton => {
    const instance = this.instance || (this.instance = new this())
    return instance
  }

  findFirstOnes = (): DailyWord[] => {
    return this.words
  }
}

export default DailyWordSingleton
