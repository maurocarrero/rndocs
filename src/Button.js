import React, {Component} from 'react'
import {StyleSheet, Text, TouchableHighlight} from 'react-native'

export default class Button extends Component {

  _onPressButton() {
    console.log('You tapped the button')
  }

  render() {
    const { button, centering } = styles
    return (
      <TouchableHighlight
        onPress={this._onPressButton}
        style={[button, centering]}
      >
        <Text>The button</Text>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  centering: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: 'tomato',
    borderRadius: 3,
    height: 40,
    width: 100
  }
})