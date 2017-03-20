import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import styles from './styles'

export default class ChatScreen extends Component {
  static navigationOptions = {
    title: ({ state }) => `Chat with ${state.params.user}`
  }

  render() {
    const { params } = this.props.navigation.state
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{params.user}'s chat screen</Text>
      </View>
    )
  }
}
