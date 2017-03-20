import React, { Component, PropTypes } from 'react'
import { AppRegistry, NavigatorIOS, StyleSheet, Text, View } from 'react-native'

import PerpetualAnimation from './PerpetualAnimation'
import Button from './components/Button'
import colors from './assets/colors'

export default class NavigatorIOSApp extends Component {
  static _getColor() {
    return colors[ Math.floor(Math.random() * colors.length) ]
  }

  static _index = 0

  static _getScene = () => {
    const barTintColor = NavigatorIOSApp._getColor()
    const titleTextColor = NavigatorIOSApp._getColor()
    const tintColor = NavigatorIOSApp._getColor()
    return {
      index: NavigatorIOSApp._index++,
      component: MyView,
      title: barTintColor,
      passProps: {
        title: barTintColor
      },
      barTintColor,
      titleTextColor,
      tintColor
    }
  }

  render() {
    return (
      <NavigatorIOS
        initialRoute={NavigatorIOSApp._getScene()}
        style={{ flex: 1 }}
      />
    )
  }
}

class MyView extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired
  }

  constructor() {
    super()
    this._handleBackPress = this._handleBackPress.bind(this)
    this._handleNextPress = this._handleNextPress.bind(this)
  }

  _handleBackPress() {
    this.props.navigator.pop()
  }

  _handleNextPress() {
    this.props.navigator.push(NavigatorIOSApp._getScene())
  }

  render() {
    return (
      <View style={[ styles.container, { backgroundColor: this.props.route.title } ]}>
        <Text style={[ styles.title, { color: this.props.route.titleTextColor } ]}>{ this.props.title }</Text>
        <PerpetualAnimation />
        <View style={styles.row}>
          {
            this.props.route.index > 0 &&
            <Button
              title="Back"
              onPress={this._handleBackPress}
            />
          }
          <Button
            title="Next"
            onPress={this._handleNextPress}
          />
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingTop: 45
  },
  row: {
    flexDirection: 'row',
    padding: 5
  },
  title: {
    fontFamily: 'Avenir-Black',
    fontSize: 27
  }
})

AppRegistry.registerComponent('RNDocs', () => NavigatorIOSApp)
