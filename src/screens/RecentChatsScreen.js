import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Button from '../components/Button'
import styles from './styles'

export default class RecentChatsScreen extends Component {
  static navigationOptions = {
    title: 'Recent'
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>The recent chats screen</Text>
        <View style={styles.buttonContainer}>
          <Button
            style={{button: styles.button}}
            onPress={() => this.props.navigation.navigate('Chat', { user: 'Lucy' })}
            title="Chat with Lucy"
          />
          <Button
            style={{button: styles.button}}
            onPress={() => this.props.navigation.navigate('Chat', { user: 'Mauro' })}
            title="Chat with Mauro"
          />
        </View>
      </View>
    )
  }
}
