import { StyleSheet, View } from 'react-native'

import DailyWordSingleton from '../../../store/DailyWordSingleton'
import { useDailyWord } from '../../../view-model/hooks'
import DailyWord from '../../components/DailyWord'

const DailyWordScreen: React.FC = () => {
  const dailyWord = useDailyWord(DailyWordSingleton.getInstance())
  return <View style={styles.container}>{dailyWord && <DailyWord dailyWord={dailyWord} />}</View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default DailyWordScreen
