import React, { useEffect, useState } from 'react'
import {
  SafeAreaView,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Button
} from 'react-native'
import WorkshopBox from './../components/WorkshopBox'

// const workshops = [
//   {
//     title: 'React Native'
//   },
//   {
//     title: 'Design Thinking'
//   },
//   {
//     title: 'DevOps'
//   },
//   {
//     title: 'Adobe XD'
//   }
// ]

function Home ({ navigation, route }) {
  const [workshops, setWorkshops] = useState([])
  const newWorkshop = route.params.newWorkshop

  useEffect(() => {
    if (newWorkshop) {
      setWorkshops([{ title: newWorkshop }, ...workshops])
    }
  }, [newWorkshop])

  const handleOnPressWorkshopBox = workshop => {
    navigation.navigate('Workshop', {
      workshop
    })
  }

  const handleOnPressAddButton = () => {
    navigation.navigate('AddWorkshop')
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Workshops FNSL!</Text>
      <FlatList
        data={workshops}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleOnPressWorkshopBox(item)}>
            <WorkshopBox title={item.title} />
          </TouchableOpacity>
        )}
        keyExtractor={item => item.title}
        ListFooterComponent={
          <Button
            onPress={handleOnPressAddButton}
            title='Add Workshop...'
          ></Button>
        }
      />
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginHorizontal: 10
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold'
  }
})
