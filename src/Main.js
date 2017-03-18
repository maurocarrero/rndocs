import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import Button from './Button'

export default class HandlingTouches extends Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => console.log('All view was touched')}
      >
        <View style={styles.container}>
          <Text style={styles.title}>
            Handling touches
          </Text>
          <Button />
        </View>
      </TouchableOpacity>
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
