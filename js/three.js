import React, { Component } from 'react';
import ListItem from './ListItem.js';
import ListItemDivider from './ListItemDivider.js';
import Global from './Global';
import {
  Dimensions,
  Image,
  PixelRatio,
  ScrollView,
  StyleSheet,
  View
} from 'react-native';

const {width} = Dimensions.get('window');

export default class three extends Component {
  render() {

    return (
      <View style={styles.container}>
        <View style={styles.divider} />
        <ScrollView style={styles.content}>
          <View style={{width: width, height: 20}}/>
          <ListItem icon={require('../images/ic_friends_circle.png')} text={"朋友圈"} />
          <View style={{width: width, height: 20}}/>
          <ListItem icon={require('../images/ic_scan.png')} text={"扫一扫"} />
          <ListItemDivider/>
          <ListItem icon={require('../images/ic_shake.png')} text={"摇一摇"} />
          <View style={{width: width, height: 20}}/>
          <ListItem icon={require('../images/ic_nearby.png')} text={"附近的人"}/>
          <ListItemDivider/>
          <ListItem icon={require('../images/ic_bottle.png')} text={"漂流瓶"}/>
          <View style={{width: width, height: 20}}/>
          <ListItem icon={require('../images/ic_shopping.png')} text={"购物"} />
          <ListItemDivider/>
          <ListItem icon={require('../images/ic_game.png')} text={"游戏"}/>
          <View style={{width: width, height: 20}}/>
          <ListItem icon={require('../images/ic_program.png')} text={"小程序"}/>
        </ScrollView>
        <View style={styles.divider} />
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
    flexDirection: 'column',
    backgroundColor: Global.pageBackgroundColor
  },
  tabBarIcon: {
    width: 24,
    height: 24,
  },
});
