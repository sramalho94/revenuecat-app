import { StatusBar } from 'expo-status-bar'
import { Text, View, SafeAreaView } from 'react-native'

export default function App() {
  return (
    <SafeAreaView className="flex flex-row justify-center">
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}
