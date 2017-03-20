import React, { Component, PropTypes } from 'react'
import { AppRegistry, NavigatorIOS, StyleSheet, Text, View } from 'react-native'
import { StackNavigator } from 'react-navigation'

import HomeScreen from './screens/HomeScreen'
import ChatScreen from './screens/ChatScreen'

const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen }
});

AppRegistry.registerComponent('RNDocs', () => SimpleApp)
