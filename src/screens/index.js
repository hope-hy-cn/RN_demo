import React  from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './Home'
import NewsScreen from './News'
import Icon from 'react-native-vector-icons/AntDesign'

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  News: NewsScreen,
},{
  initialRouteName: 'News', // 第一次进来在哪一个Tabbar上
  defaultNavigationOptions: ({ navigation }) => {
    return {
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        // console.log(focused,horizontal,routeName)

        // 设置tabbar icon
        let incoName;
        switch(routeName) {
          case 'Home':
            iconName = 'home'
            break
          case 'News':
            iconName = 'rocket1'
          default:
            break
        }

        return <Icon name={iconName} size={25} color={tintColor}/>
      },
    }
  },
  tabBarOptions: {
    activeTintColor: '#FF5470',//选中时的颜色
    inactiveTintColor: '#474747',
    labelStyle: {
      fontSize: 10,
    },
    style: {
      backgroundColor: '#FBFBFB', // 设置tabbar的背景颜色
    },
  }
});

export default createAppContainer(TabNavigator);