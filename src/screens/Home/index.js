import { createStackNavigator } from 'react-navigation'
import Home from './Home'

const HomeStack = createStackNavigator({
  Home,
});

// 设置tabbar名字
HomeStack.navigationOptions = {
  title: "鲜萝卜",
}

export default HomeStack
