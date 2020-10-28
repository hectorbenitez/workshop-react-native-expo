import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

function WorkshopBox (props) {
  return (
    <View style={styles.box}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  )
}

export default WorkshopBox

const styles = StyleSheet.create({
  box: {
    padding: 10,
    backgroundColor: '#268bd2',
    marginTop: 10,
    borderRadius: 5,
    alignItems: 'center'
  },
  title: {
    color: 'white'
  }
})
