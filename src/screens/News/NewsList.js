import React, { Component } from 'react'
import { Text, View, FlatList, TouchableOpacity } from 'react-native'
import { getPosts } from '../../requests'
import { Loading } from './../../components'

const ListItemSeparator = () => {
  return <View style={{ borderBottomColor: '#DEDEDE', borderBottomWidth: 1}} ></View>
}

export default class NewsList extends Component {
  static navigationOptions = { // 头部
    title: '兔子窝',
    headerStyle: {
      backgroundColor: '#FBFBFB',
    },
    headerBackTitle: '返回',
  };

  state = {
    list: [],
    isLoading: true,
    isRefreshing: false
  }

  async componentDidMount () {
    try {
      const list = await getPosts()
      this.setState({
        list,
        isLoading: false
      })
    } catch (error) {
      console.error(error)
    }
  }

  // 点击跳转页面
  handleListItemPress = (id) => {
    console.log(this.props,'this.props')
    this.props.navigation.navigate('Details', { // 跳转页面的名字
      id
    })
  }

  // 上滑
  handleEndReached = () => {
    alert('上滑')
  }
  
  // 下拉
  handleRefresh = () => {
    this.setState({
      isRefreshing: true
    },()=>{
      // 模拟ajax请求
      setTimeout(() => {
        this.setState({
          isRefreshing: false
        })
        alert('下拉请求完成')
      }, 2000)
    })
  }

  renderListItem = ({item}) => {
    return (
      <TouchableOpacity onPress={this.handleListItemPress.bind(this, item.id)}>
        <Text style={{margin: 8}}>
          {item.title}
        </Text>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      this.state.isLoading
      ?
      // <ActivityIndicator size="small" color="#00ff00" />
      <Loading  title="加载中..."/>
      :
      <FlatList 
        data = {this.state.list}
        renderItem = {this.renderListItem}
        keyExtractor = {item => item.id.toString()} // key 必须为字符串
        ItemSeparatorComponent = {ListItemSeparator}
        onEndReached={this.handleEndReached} //上拉 距离底部  onEndReachedThreshold  触发
        onEndReachedThreshold={0.2}
        onRefresh={this.handleRefresh}
        refreshing={this.state.isRefreshing}
      />
    )
  }
}
