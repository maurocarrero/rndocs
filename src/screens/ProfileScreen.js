import React, { Component } from 'react'
import { Text, View } from 'react-native'

import screenStyles from './screenStyles'

export default class ProfileScreen extends Component {
  static navigationOptions = {
    title: 'Profile'
  }

  render() {
    const { params } = this.props.navigation.state
    return (
      <View style={screenStyles.container}>
        <Text style={screenStyles.text}>{params.name}'s profile screen.</Text>
      </View>
    )
  }
}