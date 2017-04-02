import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Button from '../components/Button'
import styles from './styles'

export default class AllContactsScreen extends Component {
  static navigationOptions = {
    title: 'All Contacts'
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>List of all the contacts.</Text>
        <View style={[styles.buttonContainer, { height: 200 }]}>
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
          <Button
            style={{button: styles.button}}
            onPress={() => this.props.navigation.navigate('Chat', { user: 'Peteco' })}
            title="Chat with Peteco"
          />
          <Button
            style={{button: styles.button}}
            onPress={() => this.props.navigation.navigate('Chat', { user: 'Boris' })}
            title="Chat with Boris"
          />
        </View>
      </View>
    )
  }
}
