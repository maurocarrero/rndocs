import React, { Component } from 'react'
import { AppRegistry, StyleSheet, View } from 'react-native'
import AnimatedBounce from './AnimatedBounce'
import AnimatedRotation from './AnimatedRotation'
import AnimatedSequence from './AnimatedSequence'

class Animating extends Component {
  render() {
    return (
      <View style={{
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
      }}>
        <View style={styles.animationContainer}>
          <AnimatedBounce />
          <AnimatedRotation />
        </View>
        <View style={styles.animationContainer}>
          <AnimatedSequence />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  animationContainer: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  }
})

AppRegistry.registerComponent('RNDocs', () => Animating)
