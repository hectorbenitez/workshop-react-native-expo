import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import WorkshopBox from './components/WorkshopBox'
import Home from './screens/Home'
import Workshop from './screens/Workshop'
import AddWorkshop from './screens/AddWorkshop'

const RootNavigator = createStackNavigator()
const MainNavigator = createStackNavigator()

// Root
// Root: Main - Modal
// Main: Home - WS

function MainScreen () {
  return (
    <MainNavigator.Navigator>
      <MainNavigator.Screen name='Home' component={Home} />
      <MainNavigator.Screen name='Workshop' component={Workshop} />
    </MainNavigator.Navigator>
  )
}

export default function App () {
  return (
    <NavigationContainer>
      <RootNavigator.Navigator>
        <RootNavigator.Screen name='Main' component={MainScreen} options={{
          headerShown: false
        }} />
        <RootNavigator.Screen name='AddWorkshop' component={AddWorkshop} />
      </RootNavigator.Navigator>
    </NavigationContainer>
  )
}
