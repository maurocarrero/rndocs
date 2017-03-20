import React, {Component} from 'react'
import {StyleSheet, Text, TouchableHighlight} from 'react-native'

export default class Button extends Component {
  render() {
    const { button, centering } = styles
    return (
      <TouchableHighlight
        onPress={this.props.onPress}
        underlayColor={'#343434'}
        style={[button, centering]}
      >
        <Text style={styles.text}>{this.props.title}</Text>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#434343',
    borderRadius: 4,
    padding: 10,
    margin: 10
  },
  centering: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#ededed'
  }
})
