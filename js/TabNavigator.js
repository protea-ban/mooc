import React, { Component } from 'react';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import { Icon } from 'native-base';
import STRING from './const_string_zh_CN';
import { Image, StyleSheet } from 'react-native';

//pages
import TabMessage from './MessageStackNavigator';
import TabClass from './CourseStackNavigator';
import Discovery from'./DiscoveryNavigator'
import Me from'./MeNavigator'
// const MessageTabOptions = {
//     tabBarLabel: STRING.message_page_name,
//     tabBarIcon: ({ tintColor }) => (
//         <Icon name='chatbubbles' />
//     ),
    // headerStyle: {backgroundColor:'black'},
    // headerTitle: STRING.message_page_title,
    // headerTitleStyle: {
    //     color: 'black',
    //     textAlign: 'center',
    //     alignSelf: 'center',
    // },
// };

// const ClassTabOptions = {
//     tabBarLabel: STRING.class_page_name,
//     tabBarIcon: ({ tintColor }) => (
//         <Icon name='person' />
//     ),
    // headerStyle: {backgroundColor:'black'},
    // headerTitle: STRING.class_page_title,
    // headerTitleStyle: {
    //     color: 'black',
    //     textAlign: 'center',
    //     alignSelf: 'center',
    // },
// };

// const DiscoveryTabOptions = {
//     tabBarLabel: STRING.discovery_page_name,
//     tabBarIcon: ({ tintColor }) => (
//         <Icon name='bookmark' />
//     ),
    // headerStyle: {backgroundColor:'black'},
    // headerTitle: STRING.discovery_page_title,
    // headerTitleStyle: {
    //     color: 'white',
    //     textAlign: 'center',
    //     alignSelf: 'center',
    // },
// };

// const MeTabOptions = {
//     tabBarLabel: STRING.me_page_name,
//     tabBarIcon: ({ tintColor }) => (
//         <Icon name='contact' />
//     ),
    // headerStyle: {backgroundColor:'black'},
    // headerTitle: STRING.me_page_title,
    // headerTitleStyle: {
    //     color: 'black',
    //     textAlign: 'center',
    //     alignSelf: 'center',
    // },
// };


const MOOCTabNavigator = TabNavigator({
    Message: {
      screen: TabMessage,
      navigationOptions: {
        tabBarLabel: STRING.message_page_name,
        tabBarIcon: ({focused, tintColor}) => {
          if (focused) {
            return (
              <Image style={styles.tabBarIcon} source={require('../images/ic_weixin_selected.png')}/>
            );
          }
          return (
            <Image style={styles.tabBarIcon} source={require('../images/ic_weixin_normal.png')}/>
          );
        },
      }
    },
    Class: {
      screen: TabClass,
      navigationOptions: {
        tabBarLabel: STRING.class_page_name,
        tabBarIcon: ({focused, tintColor}) => {
          if (focused) {
            return (
              <Image style={styles.tabBarIcon} source={require('../images/ic_contacts_selected.png')}/>
            );
          }
          return (
            <Image style={styles.tabBarIcon} source={require('../images/ic_contacts_normal.png')}/>
          );
        },
      }
    },
    Discovery: {
      screen: Discovery,
      navigationOptions: {
        tabBarLabel: STRING.discovery_page_name,
        tabBarIcon: ({focused, tintColor}) => {
          if (focused) {
            return (
              <Image style={styles.tabBarIcon} source={require('../images/ic_find_selected.png')}/>
            );
          }
          return (
            <Image style={styles.tabBarIcon} source={require('../images/ic_find_normal.png')}/>
          );
        },
      }
    },
    Me: {
      screen: Me,
      navigationOptions: {
        tabBarLabel: STRING.me_page_name,
        tabBarIcon: ({focused, tintColor}) => {
          if (focused) {
            return (
              <Image style={styles.tabBarIcon} source={require('../images/ic_me_selected.png')}/>
            );
          }
          return (
            <Image style={styles.tabBarIcon} source={require('../images/ic_me_normal.png')}/>
          );
        },
      }
    },
}, {
        tabBarComponent: TabBarBottom,//or TabBarTop
        tabBarPosition: 'bottom', //or top
        swipeEnabled: true,     //是否允许再标签之间滑动
        animationEnabled: false,
        showIcon: true,
        //设置默认界面
        initialRouteName: 'Message',
    });

const styles = StyleSheet.create({
  tabBarIcon: {
    width: 24,
    height: 24,
  },
});

export default MOOCTabNavigator;
