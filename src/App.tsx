import { StyleSheet, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { registerRootComponent } from 'expo'
import { StatusBar } from 'expo-status-bar'

import { DailyWord, DailyWordSingleton, useDailyWord } from './features'

function App() {
  const dailyWord = useDailyWord(DailyWordSingleton.getInstance())

  return (
    <NavigationContainer>
      <View style={styles.container}>
        {dailyWord && <DailyWord dailyWord={dailyWord} />}
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default registerRootComponent(App)
