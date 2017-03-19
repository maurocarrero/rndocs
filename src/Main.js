import React, { Component } from 'react'
import { AppRegistry, Navigator, StyleSheet, Text, View } from 'react-native'
import Button from './components/Button'

class Route extends Component {
  render() {
    const { route } = this.props
    return (
      <View style={[ styles.container, { backgroundColor: route.color } ]}>
        <View style={styles.row}>
          <Text style={[ { color: route.fontColor }, styles.title ]}>{route.title}</Text>
        </View>
      </View>
    )
  }
}

export default class NavAllDay extends Component {

  static _routes = [
    {
      title: 'First screen', index: 0, color: 'peachpuff'
    },
    {
      title: 'Vertical Up Swipe Jump', index: 1, color: 'royalblue', fontColor: 'powderblue',
      sceneConfig: Navigator.SceneConfigs.VerticalUpSwipeJump
    },
    {
      title: 'Float From Right', index: 2, color: 'palegreen', fontColor: 'saddlebrown',
      sceneConfig: Navigator.SceneConfigs.FloatFromRight
    },
    {
      title: 'Vertical Down Swipe Jump', index: 3, color: 'oldlace', fontColor: 'rebeccapurple',
      sceneConfig: Navigator.SceneConfigs.VerticalDownSwipeJump
    },
    {
      title: 'Float From Left', index: 4, color: 'royalblue', fontColor: 'powderblue',
      sceneConfig: Navigator.SceneConfigs.FloatFromLeft
    },
    {
      title: 'Push From Right', index: 5, color: 'royalblue', fontColor: 'powderblue',
      sceneConfig: Navigator.SceneConfigs.PushFromRight
    },
    {
      title: 'Float From Bottom', index: 6, color: 'royalblue', fontColor: 'powderblue',
      sceneConfig: Navigator.SceneConfigs.FloatFromBottom
    },
    {
      title: 'Push From Left', index: 7, fontColor: 'rebeccapurple', color: 'powderblue',
      sceneConfig: Navigator.SceneConfigs.PushFromLeft
    },
    {
      title: 'Swipe From Left', index: 8, fontColor: 'powderblue', color: 'saddlebrown',
      sceneConfig: Navigator.SceneConfigs.SwipeFromLeft
    }
  ]

  _leftButton(route, navigator, index, navState) {
    return route.index > 0 &&
      <Button title="Back"
              onPress={() => navigator.pop()}
      />
  }

  _rightButton(route, navigator, index, navState) {
    return route.index < NavAllDay._routes.length - 1 &&
      <Button title="Next"
              onPress={() =>
                navigator.push(NavAllDay._routes[ index + 1 ])}
      />
  }

  _title(route, navigator, index, navState) {
    return (
      <View style={{ paddingTop: 10 }}>
        <Text style={{ fontWeight: '700', textAlign: 'center' }}>Built-In Navigator Bar</Text>
        <Text style={{ fontWeight: '400', textAlign: 'center' }}>{route.title}</Text>
      </View>
    )
  }

  render() {
    const { _routes } = NavAllDay
    return (
      <Navigator
        initialRoute={_routes[ 0 ]}
        initialRouteStack={_routes}
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={{
              LeftButton: this._leftButton,
              RightButton: this._rightButton,
              Title: this._title
            }}
          />
        }
        renderScene={(route) => <Route route={route}/>}
        configureScene={(route, routeStack) => route.sceneConfig}
      />
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

AppRegistry.registerComponent('RNDocs', () => NavAllDay)
