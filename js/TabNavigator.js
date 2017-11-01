import React, { Component } from 'react';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import { Icon } from 'native-base';
import STRING from './const_string_zh_CN';
import { Image } from 'react-native';

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
        tabBarIcon: ({ tintColor }) => (
            // <Icon name='chatbubbles' />
            <Image
              source={require('../images/ic_weixin_normal.png')}
              style={{width: 40,height: 40}}
            />
        ),
      }
    },
    Class: {
      screen: TabClass,
      navigationOptions: {
        tabBarLabel: STRING.class_page_name,
        tabBarIcon: ({ tintColor }) => (
            // <Icon name='person' />
            <Image
              source={require('../images/ic_contacts_normal.png')}
              style={{width: 40,height: 40}}
            />
        ),
      }
    },
    Discovery: {
      screen: Discovery,
      navigationOptions: {
        tabBarLabel: STRING.discovery_page_name,
        tabBarIcon: ({ tintColor }) => (
            // <Icon name='bookmark' />
            <Image
              source={require('../images/ic_find_normal.png')}
              style={{width: 40,height: 40}}
            />
        ),
      }
    },
    Me: {
      screen: Me,
      navigationOptions: {
        tabBarLabel: STRING.me_page_name,
        tabBarIcon: ({ tintColor }) => (
            // <Icon name='contact' />
            <Image
              source={require('../images/ic_me_normal.png')}
              style={{width: 40,height: 40}}
            />
        ),
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

export default MOOCTabNavigator;
