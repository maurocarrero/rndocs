import React, { Component } from 'react'
import { Animated, Easing } from 'react-native'

const hakkeNoFuinShikiPNG = require('./../assets/images/Naruto_Shiki_Fujin.png')

export default class PerpetualAnimation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rotateValue: new Animated.Value(0)
    }
  }

  _rotate() {
    Animated.timing(
      this.state.rotateValue,
      {
        duration: 3000,
        easing: Easing.inOut(Easing.ease),
        toValue: 360
      }
    ).start(() => {
      this.state.rotateValue.setValue(0)
      this._rotate()
    })
  }

  componentDidMount() {
    this._rotate()
  }

  render() {
    return (
      <Animated.Image
        source={hakkeNoFuinShikiPNG}
        style={{
          height: 200,
          transform: [
            {
              scale: 0.5
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