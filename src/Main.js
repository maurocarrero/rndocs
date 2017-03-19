import React, { Component } from 'react'
import { AppRegistry, Navigator, StyleSheet, Text, View } from 'react-native'
import Button from './components/Button'

class Route extends Component {
  render() {
    const { route } = this.props
    return (
      <View style={[ styles.container, { backgroundColor: route.color } ]}>
        <View style={styles.row}>
          <Text style={styles.title}>Title: </Text>
          <Text style={[ { color: route.fontColor }, styles.title ]}>{route.title}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.rowTitle}>Index: </Text>
          <Text style={{ color: route.fontColor }}>{route.index}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.rowTitle}>Color: </Text>
          <Text style={{ color: route.fontColor }}>{route.color}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.rowTitle}>Font Color: </Text>
          <Text style={{ color: route.fontColor }}>{route.fontColor}</Text>
        </View>
      </View>
    )
  }
}

export default class NavAllDay extends Component {

  static _routes = [
    { title: 'First Scene', index: 0, color: 'peachpuff' },
    { title: 'Second Scene', index: 1, color: 'royalblue', fontColor: 'powderblue' },
    { title: 'Third Scene', index: 2, color: 'palegreen', fontColor: 'saddlebrown' },
    { title: 'Fourth Scene', index: 3, color: 'oldlace', fontColor: 'rebeccapurple' }
  ]

  _leftButton(route, navigator, index, navState) {
    return route.index > 0 &&
      <Button title="Back"
              onPress={() => navigator.pop()}
      />
  }

  _rightButton(route, navigator, index, navState) {
    return route.index < 3 &&
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
        renderScene={(route) => <Route route={route}/>}/>
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
