import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native'
import Button from './Button'

export default class HandlingTouches extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Handling touches
        </Text>
        <Button />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
})

AppRegistry.registerComponent('RNDocs', () => HandlingTouches)
