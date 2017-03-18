import React, { Component } from 'react'
import { AppRegistry, StyleSheet, View } from 'react-native'
import { StackNavigator } from 'react-navigation'

import MainScreen from './screens/MainScreen'
import ProfileScreen from './screens/ProfileScreen'

const AppStackNavigator = StackNavigator({
  Main: { screen: MainScreen },
  Profile: { screen: ProfileScreen },
})

AppRegistry.registerComponent('RNDocs', () => AppStackNavigator)
