import React, { Component } from 'react'
import { Text, View,  ActivityIndicator, StyleSheet } from 'react-native'

export default class Loading extends Component {
  render() {
    return (
      <View style= {styles.container}>
        <ActivityIndicator size="small" color="#354052" />
        <Text style= {styles.title}>{this.props.title}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  loadingIcon: {

  },
  title: {
    textAlign: 'center',
    marginTop: 10
  }
})
