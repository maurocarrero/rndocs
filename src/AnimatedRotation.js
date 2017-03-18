import React, { Component } from 'react'
import { Animated, Easing } from 'react-native'

const hakkeNoFuinShikiPNG = require('./Naruto_Shiki_Fujin.png')

export default class AnimatedRotation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rotateValue: new Animated.Value(0),
    }
  }

  componentDidMount() {
    Animated.timing(
      this.state.rotateValue,
      {
        delay: 500,
        duration: 3000,
        easing: Easing.inOut(Easing.ease),
        toValue: 360,
      }
    ).start(() => console.log('Done1?'))
  }

  render() {
    return (
      <Animated.Image
        source={hakkeNoFuinShikiPNG}
        style={{
          height: 200,
          transform: [
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
