import React, { Component } from 'react'
import { StyleSheet, Text, TouchableHighlight } from 'react-native'

export default class Button extends Component {

  _onPressButton() {
    console.log('onPress')
  }

  _onLongPressButton() {
    console.log('onLongPress')
  }

  _onHideUnderlay() {
    console.log('onHideUnderlay')
  }

  _onShowUnderlay() {
    console.log('onShowUnderlay')
  }

  render() {
    const { button, centering } = styles
    return (
      <TouchableHighlight
        onPress={this._onPressButton}
        onLongPress={this._onLongPressButton}
        onHideUnderlay={this._onHideUnderlay}
        onShowUnderlay={this._onShowUnderlay}
        underlayColor={'gold'}
        activeOpacity={.3}
        style={[ button, centering ]}
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
