import React, { Component, PropTypes } from 'react'
import { AppRegistry, NavigatorIOS, StyleSheet, Text, View } from 'react-native'
import PerpetualAnimation from './PerpetualAnimation'
import Button from './components/Button'

export default class NavigatorIOSApp extends Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: MyFirstScene,
          title: 'My Initial Scene',
        }}
        style={{ flex: 1 }}
      />
    )
  }
}

class MyFirstScene extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
  }

  constructor(props, context) {
    super(props, context);
    this._onForward = this._onForward.bind(this);
  }

  _onForward() {
    this.props.navigator.push({
      title: 'Scene',
      component: MySecondScene
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Current Scene: { this.props.route.title }</Text>
        <PerpetualAnimation />
        <Button
          title="Tap me to load the next scene"
          onPress={this._onForward}
        />
      </View>
    )
  }
}

class MySecondScene extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
  }

  constructor(props, context) {
    super(props, context);
    this._onForward = this._onForward.bind(this);
  }

  _onForward() {
    this.props.navigator.push({
      title: 'Second Scene',
      component: MyFirstScene
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Current Scene: { this.props.route.title }</Text>
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
