import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, PixelRatio } from 'react-native';
import Global from './Global';

const {width} = Dimensions.get('window');

export default class MessagePage extends Component{
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.divider}></View>
        <View style={styles.content}>
          <Text>班绍桓</Text>
        </View>
        <View style={styles.divider}></View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  divider: {
    width: width,
    height: 1 / PixelRatio.get(),
    backgroundColor: '#D3D3D3'
  },
  content: {
    flex: 1,
    width: width,
    flexDirection: 'row',
    backgroundColor: Global.pageBackgroundColor
  },
  tabBarIcon: {
    width: 24,
    height: 24,
  },
});
