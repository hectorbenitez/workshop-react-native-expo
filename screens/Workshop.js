import React from 'react'
import { Text, View } from 'react-native'

function Workshop ({ route }) {
  const { workshop } = route.params

  return (
    <View>
      <Text>{workshop.title}</Text>
    </View>
  )
}

export default Workshop
