import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styles from './styles'
import Button from '../components/Button'

export default class ChatScreen extends Component {
  static navigationOptions = {
    title: ({ state }) => state.params.user,
    header: ({ state, navigate }) => {
      return {
        right: (
          <Button
            title="Info"
            onPress={() =>
              navigate('Info', {
                user: state.params.user,
                mode: 'info'
              })}
          />
        )
      }
    }
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
