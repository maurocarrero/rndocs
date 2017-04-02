import React, {Component} from 'react'
import {StyleSheet, Text, TouchableHighlight} from 'react-native'

export default class Button extends Component {
  render() {
    const { onPress, style, title } = this.props
    const { button, centering } = style || defaultStyles
    return (
      <TouchableHighlight
        onPress={onPress}
        underlayColor={'ghostwhite'}
        style={[button, centering]}
      >
        <Text>{title}</Text>
      </TouchableHighlight>
    )
  }
}

const defaultStyles = StyleSheet.create({
  button: {
    padding: 10,
    margin: 10
  },
  centering: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})
