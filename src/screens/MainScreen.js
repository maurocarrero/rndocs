import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Button from '../components/Button'

import screenStyles from './screenStyles'

export default class MainScreen extends Component {
  static navigationOptions = {
    title: 'Welcome'
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={screenStyles.container}>
        <Text style={screenStyles.text}>The main screen.</Text>
        <View style={screenStyles.buttonsContainer}>
          <Button
            title="Go to Jane's profile"
            onPress={() => navigate('Profile', { name: 'Jane' }) }
          />
          <Button
            title="Go to Mauro's profile"
            onPress={() => navigate('Profile', { name: 'Mauro' }) }
          />
        </View>
      </View>
    )
  }
}