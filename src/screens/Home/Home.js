import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Home extends Component {
  static navigationOptions = { 
    title: '鲜萝卜', // 头部
    headerStyle: {
      backgroundColor: '#FBFBFB',
    },
  };
  render() {
    return (
      <View>
        <Text> home </Text>
      </View>
    )
  }
}
