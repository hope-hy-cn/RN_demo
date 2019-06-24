import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';

import Swiper from 'react-native-swiper';

export default class LandingScreen extends Component {
  render(){
    return (
      <Swiper
        style={styles.wrapper}
        showsButtons={false}
        activeDot={
          <View
            style={{
              backgroundColor: '#000',
              width: 8,
              height: 8,
              borderRadius: 4,
              marginLeft: 3,
              marginRight: 3,
              marginTop: 3,
              marginBottom: 3,
            }}
          />
        }
      >
        <View style={styles.slide1}>
          <Image
            resizeMode = 'cover'
            style={{width:'100%'}}
            source={require('./src/assets/images/screen1.png')}
          />
        </View>
        <View style={styles.slide2}>
          <Image
              resizeMode = 'cover'
              style={{width:'100%'}}
              source={require('./src/assets/images/screen2.png')}
            />
          </View>
        <View style={styles.slide3}>
          <Button title="进入app" onPress={this.props.enterApp} />
        </View>
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    fontSize: 18
  }
})