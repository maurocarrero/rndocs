import React, { Component } from 'react'
import { Animated, Easing } from 'react-native'

const hakkeNoFuinShikiPNG = require('./Naruto_Shiki_Fujin.png')

export default class AnimatedSequence extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bounceValue: new Animated.Value(0),
      rotateValue: new Animated.Value(0)
    }
  }

  componentDidMount() {
    this.state.bounceValue.setValue(1.5)
    Animated.sequence([
      Animated.timing(
        this.state.rotateValue,
        {
          delay: 500,
          duration: 3000,
          easing: Easing.inOut(Easing.ease),
          toValue: 360,
        }
      ).start(() => console.log('Done rotation.')),
      Animated.spring(
        this.state.bounceValue,
        {
          toValue: 0.8,
          friction: 1,
          tension: 100
        }
      ).start(() => console.log('Done bounce.'))
    ])
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
              scale: this.state.bounceValue,
            },
            {
              rotate: this.state.rotateValue.interpolate({
                inputRange: [ 0, 360 ],
                outputRange: [ '0deg', '360deg' ]
              })
            }
          ],
          width: 200
        }}
      />
    )
  }
}