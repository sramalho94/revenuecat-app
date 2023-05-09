import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import ActionRow from '../components/ActionRow'

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-gray-100 relative">
      <ScrollView>
        {/* Pro or Upgrade Button */}
        <TouchableOpacity className="absolute z-50 top-5 right-10 items-center">
          <Ionicons name="person-circle" size={30} color="#E5962D" />
          <Text className="text-center text-[#E5962D]">PRO/UPGRADE</Text>
        </TouchableOpacity>
        {/* Image */}
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Headphones_icon.svg/472px-Headphones_icon.svg.png?20120312011037'
          }}
          className="w-full h-64 "
        />

        {/* ActionRows */}
        <ActionRow
          title="Track Workout"
          screen="Demo"
          color="#E5962D"
          icon="fitness"
          vertical
        />
        {/* ActionRows */}
        {/* ActionRows */}
        {/* ActionRows */}
        {/* ActionRows */}
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen
