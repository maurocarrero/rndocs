import React, { Component } from 'react'
import { Animated, Easing } from 'react-native'

const hakkeNoFuinShikiPNG = require('./Naruto_Shiki_Fujin.png')

export default class AnimatedSequence extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bounceValue: new Animated.Value(0),
      rotateValue: new Animated.Value(0),
      rotateYValue: new Animated.Value(0)
    }
  }

  _bounceTo(toValue) {
    return Animated.spring(
      this.state.bounceValue,
      {
        toValue,
        friction: 1,
        tension: 100
      }
    )
  }

  _rotateTo(toValue) {
    return Animated.timing(
      this.state.rotateValue,
      {
        duration: 1500,
        easing: Easing.inOut(Easing.ease),
        toValue
      }
    )
  }

  _rotateY(toValue) {
    return Animated.timing(
      this.state.rotateYValue,
      {
        delay: 500,
        duration: 1500,
        easing: Easing.inOut(Easing.ease),
        toValue
      }
    )
  }

  componentDidMount() {
    this.state.bounceValue.setValue(1.5)
    Animated.sequence([
      this._bounceTo(0.8),
      this._rotateTo(360),
      this._bounceTo(0.3),
      this._rotateTo(0),
      this._rotateY(360),
      this._rotateY(0),
      this._bounceTo(0.8)
    ]).start(() =>
      console.log('Animations sequence done.')
    )
  }

  render() {
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
            },
            {
              rotateY: this.state.rotateYValue.interpolate({
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