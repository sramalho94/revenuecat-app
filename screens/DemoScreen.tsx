import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import { RootStackParamList } from '../App'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Ionicons } from '@expo/vector-icons'

export type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Demo'
>

const DemoScreen = () => {
  return (
    <SafeAreaView className="bg-papa-orange">
      <TouchableOpacity>
        <Ionicons name="arrow-back" size={50} color="white" />
      </TouchableOpacity>
      <Text>DemoScreen</Text>
    </SafeAreaView>
  )
}

export default DemoScreen
