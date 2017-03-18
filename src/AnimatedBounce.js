import React, { Component } from 'react'
import { Animated } from 'react-native'

const hakkeNoFuinShikiPNG = require('./Naruto_Shiki_Fujin.png')

export default class AnimatedBounce extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bounceValue: new Animated.Value(0)
    }
  }

  componentDidMount() {
    this.state.bounceValue.setValue(1.5)
    Animated.spring(
      this.state.bounceValue,
      {
        toValue: 0.8,
        friction: 1
      }
    ).start()
  }

  render() {
    console.log('Animated bounceValue:', this.state.rotateValue)
    return (
      <Animated.Image
        source={hakkeNoFuinShikiPNG}
        style={{
          height: 200,
          transform: [
            {
              scale: this.state.bounceValue
            }
          ],
          width: 200
        }}
      />
    )
  }
}