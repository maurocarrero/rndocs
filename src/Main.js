import React from 'react'
import { AppRegistry } from 'react-native'
import { StackNavigator, TabNavigator } from 'react-navigation'

import ChatScreen from './screens/ChatScreen'
import InfoScreen from './screens/InfoScreen'
import RecentChatsScreen from './screens/RecentChatsScreen'
import AllContactsScreen from './screens/AllContactsScreen'

const MainScreenNavigator = TabNavigator({
  Recent: { screen: RecentChatsScreen },
  AllContacts: { screen: AllContactsScreen }
})

MainScreenNavigator.navigationOptions = {
  title: 'My Chats'
}

const NestedNavigatorsApp = StackNavigator({
  Home: { screen: MainScreenNavigator },
  Chat: { screen: ChatScreen },
  Info: { screen: InfoScreen }
})

AppRegistry.registerComponent('RNDocs', () => NestedNavigatorsApp)
