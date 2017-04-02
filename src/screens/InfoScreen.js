import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styles from './styles'
import Button from '../components/Button'

export default class InfoScreen extends Component {
  static navigationOptions = {
    title: ({ state }) => {
      if (state.params.mode === 'info') {
        return `${state.params.user}'s Contact Info`
      }
      return `Chat with ${state.params.user}`
    },
    header: ({ state, setParams, goBack }) => {
      // The navigation prop has functions like setParams, goBack, and navigate.
      const { mode } = state.params
      if (mode === 'info') {
        return (
          <Button
            title="Done"
            onPress={() => {
              setParams({ mode: 'none' })
              goBack()
            }}
          />
        )
      }
      return (
        <Button
          title={`${state.params.user}'s info`}
          onPress={() => setParams({ mode: 'info' })}
        />
      )
    }
  }

  render() {
    const { params } = this.props.navigation.state
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Info screen</Text>
        <Text>All info about {params.user}</Text>
      </View>
    )
  }
}
