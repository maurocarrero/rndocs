import React, {Component} from 'react'
import {StyleSheet, Text, TouchableHighlight} from 'react-native'

export default class Button extends Component {
  render() {
    const { button, centering } = styles
    return (
      <TouchableHighlight
        onPress={this.props.onPress}
        underlayColor={'orangered'}
        style={[button, centering]}
      >
        <Text style={styles.text}>{this.props.title}</Text>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'tomato',
    borderRadius: 5,
    height: 40,
    padding: 10,
    margin: 10
  },
  centering: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'white'
  }
})
