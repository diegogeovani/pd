import { useEffect, useState } from 'react'

import { DailyWord, DailyWordRepository, ShowUseCase } from '../application'

export const useDailyWord = (repository: DailyWordRepository) => {
  const [dailyWordState, setDailyWord] = useState<DailyWord>()

  useEffect(() => {
    const dailyWord = new ShowUseCase(repository).showDailyWord()
    setDailyWord(dailyWord)
  }, [])

  return dailyWordState
}
