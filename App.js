import React, { Component } from 'react'
import { View } from 'react-native'
import Screens from './src/screens'
import LandingScreen from './LandingScreen'

export default class App extends Component {
  state = {
    isLoading: true
  }

  enterApp = (id) => {
    this.setState({
      isLoading: false
    })
    console.log(id,'id')
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#FFF'}}>
        {
          this.state.isLoading
          ?
          <LandingScreen enterApp={this.enterApp} />
          :
          <Screens />
        }
      </View>
    )
  }
}
