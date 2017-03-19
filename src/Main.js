import React, { Component } from 'react'
import { AppRegistry, Navigator, StyleSheet, Text, View } from 'react-native'
import Button from './components/Button'
import PerpetualAnimation from './PerpetualAnimation'

class Route extends Component {
  render() {
    const { route } = this.props
    return (
      <View>
        <View style={styles.row}>
          <Text style={styles.title}>Title: </Text>
          <Text style={[{ color: route.fontColor }, styles.title]}>{route.title}</Text>
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
  render() {
    const routes = [
      { title: 'First Scene', index: 0, color: 'peachpuff' },
      { title: 'Second Scene', index: 1, color: 'royalblue', fontColor: 'powderblue' },
      { title: 'Third Scene', index: 2, color: 'palegreen', fontColor: 'saddlebrown' },
      { title: 'Fourth Scene', index: 3, color: 'oldlace', fontColor: 'rebeccapurple' }
    ]
    return (
      <Navigator
        initialRoute={routes[ 0 ]}
        initialRouteStack={routes}
        renderScene={(route, navigator) => {
          return (
            <View style={[ styles.container, { backgroundColor: route.color } ]}>
              <View style={{
                flex: 1
              }}>
                {
                  route.index === 0 ?
                    <PerpetualAnimation />
                    :
                    <Route route={route}/>
                }
              </View>
              <View style={[styles.row, { alignItems: 'stretch', justifyContent: 'space-between' }]}>
                {
                  route.index > 0 &&
                  <Button
                    title="Back"
                    onPress={() => {
                      navigator.pop()
                    }}/>
                }
                {
                  route.index < 3 &&
                  <Button
                    title="Next"
                    onPress={() => {
                      navigator.push(routes[ route.index + 1 ])
                    }}/>
                }
              </View>
            </View>
          )
        }}/>
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
