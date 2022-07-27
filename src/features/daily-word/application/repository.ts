import { DailyWord } from './model'

export interface DailyWordRepository {
  findFirstOnes: () => DailyWord[]
}
