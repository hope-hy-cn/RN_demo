import React, { Component } from 'react'
import { StyleSheet ,Text, View } from 'react-native'
import { Loading } from '../../components'
import { getPost } from './../../requests'

export default class Detail extends Component {
  static navigationOptions = {
    title: '详情', // 设置头部名称
    headerStyle: {
      backgroundColor: '#FBFBFB',
    },
    headerBackTitleStyle: {
      color: '#1D2438'
    }
  };

  state = {
    isLoading: true,
    details: {}
  }

  async componentDidMount () {
    try {
      const details = await getPost(this.props.navigation.state.params.id)
      this.setState({
        details,
        isLoading: false
      })
    } catch (error) {
      alert(error)
    }
  }
  render() {
    const {
      id
    } = this.props.navigation.state.params

    return (
      this.state.isLoading
      ?
      <Loading title="加载中…" />
      :
      <View>
        <Text style = {styles.title}>{this.state.details.title}</Text>
        <Text>{this.state.details.body}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    color:'red',
    borderWidth:1,
    borderStyle: 'solid',
    borderColor: '#f00',
    height:40,
    lineHeight: 40, 
    textAlign: 'center',
    marginBottom: 20
  }
})