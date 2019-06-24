import { createStackNavigator } from 'react-navigation'
import NewsList from './NewsList'
import Detail from './Detail'

const NewsStack = createStackNavigator({
  NewsList: {
    screen: NewsList,
  },
  Details:Detail,
});

// 设置tabbar名字
NewsStack.navigationOptions = {
  title: "兔子窝",
}

export default NewsStack