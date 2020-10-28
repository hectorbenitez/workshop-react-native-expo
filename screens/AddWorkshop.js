import React, { useState } from 'react'
import { Text, View, TextInput, Button } from 'react-native'

function AddWorkshop ({ navigation }) {
  const [title, setTitle] = useState('')

  const handlePressSave = () => {
    console.log('Saving', title)
    navigation.navigate('Home', {
      newWorkshop: title
    })
  }

  return (
    <View>
      <Text>Add a new Workshop</Text>
      <TextInput
        value={title}
        onChangeText={setTitle}
        style={{ borderWidth: 1 }}
      ></TextInput>
      <Button onPress={handlePressSave} title='Save'></Button>
    </View>
  )
}

export default AddWorkshop
