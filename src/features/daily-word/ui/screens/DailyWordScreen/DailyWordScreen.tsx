import React from 'react'
import { StyleSheet, View } from 'react-native'

import DailyWordSingleton from '../../../store/DailyWordSingleton'
import { useDailyWord } from '../../../view-model/hooks'
import DailyWord from '../../components/DailyWord'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const DailyWordScreen: React.FC = () => {
  const dailyWord = useDailyWord(DailyWordSingleton.getInstance())
  return <View style={styles.container}>{dailyWord && <DailyWord dailyWord={dailyWord} />}</View>
}

export default DailyWordScreen
