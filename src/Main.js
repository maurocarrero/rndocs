import React, { Component, PropTypes } from 'react'
import { AppRegistry, NavigatorIOS, StyleSheet, Text, View } from 'react-native'
import PerpetualAnimation from './PerpetualAnimation'

export default class NavigatorIOSApp extends Component {

  constructor() {
    super()
    this._goToPetecus = this._goToPetecus.bind(this)
    this._goToSomethingElse = this._goToSomethingElse.bind(this)
  }

  _goToPetecus() {
    this._nav.push({
      component: MyView,
      title: 'Petecus',
      rightButtonTitle: 'Go to Something else',
      onRightButtonPress: this._goToSomethingElse,
      passProps: { title: 'Petecus' },
      barTintColor: 'chartreuse',
      titleTextColor: 'azure',
      tintColor: 'coral'
    });
  }

  _goToSomethingElse() {
    this._nav.push({
      component: MyView,
      title: 'Something else',
      passProps: { title: 'Something else' },
      barTintColor: 'chartreuse',
      titleTextColor: 'cadetblue',
      tintColor: 'crimson'
    });
  }

  render() {
    return (
      <NavigatorIOS
        ref={node => this._nav = node}
        initialRoute={{
          component: MyView,
          title: 'My Initial Scene',
          rightButtonTitle: 'Go to Petecus',
          onRightButtonPress: this._goToPetecus,
          passProps: { title: 'My Initial Scene' },
          barTintColor: 'gold',
          titleTextColor: 'chocolate',
          tintColor: 'cornflowerblue',

        }}
        style={{ flex: 1 }}
      />
    )
  }
}

class MyView extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Current Scene: { this.props.title }</Text>
        <PerpetualAnimation />
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
  rowTitle: {
    fontWeight: '800',
    color: '#343434'
  },
  title: {
    fontFamily: 'Avenir-Black',
    fontSize: 27
  }
})

AppRegistry.registerComponent('RNDocs', () => NavigatorIOSApp)
