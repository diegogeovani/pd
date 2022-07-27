import { DailyWord } from './model'
import { DailyWordRepository } from './repository'

export class ShowUseCase {
  private readonly repository: DailyWordRepository

  constructor(repository: DailyWordRepository) {
    this.repository = repository
  }

  showDailyWord(): DailyWord {
    return this.repository.findFirstOnes()[0]
  }
}
