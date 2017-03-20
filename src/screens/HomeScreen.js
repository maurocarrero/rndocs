import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Button from '../components/Button'
import styles from './styles'

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Main'
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <Text style={styles.title}>The main screen</Text>
        <Button title="Chat" onPress={() => navigate('Chat', { user: 'Lucy' })}/>
      </View>
    )
  }
}

