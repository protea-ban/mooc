import React, { Component } from 'react';
import {
  Dimensions,
  Image,
  PixelRatio,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View
} from 'react-native';
import ListItem from './ListItem';
import ListItemDivider from './ListItemDivider';
import Global from './Global';
const {width} = Dimensions.get('window');

// import {StackNavigator} from 'react-navigation'
// import ChatScreen from './ChatScreen'
export default class thre extends Component {
  render() {

    return (
      // <View style={styles.container}>
      //
      //   <Text style={styles.instructions}>
      //     Double tap R  on your keyboard to reload,{'\n'}
      //     Shake or press menu button for dev menu
      //   </Text>
      // </View>
      <View style={styles.container}>
        <View style={styles.divider}></View>
        <ScrollView style={styles.content}>
          <View style={{width: width, height: 20}}/>
          <TouchableHighlight underlayColor={Global.touchableHighlightColor}>
            <View style={styles.meInfoContainer}>
              <Image style={styles.meInfoAvatar} source={require('../images/avatar.png')}/>
              <View style={styles.meInfoTextContainer}>
                <Text style={styles.meInfoNickName}>{"班绍桓"}</Text>
                <Text style={styles.meInfoWeChatId}>{"昵称：" + "班绍桓"}</Text>
              </View>
              <Image style={styles.meInfoQRCode} source={require('../images/ic_qr_code.png')}/>
            </View>
          </TouchableHighlight>
          <View/>
          <View style={{width: width, height: 20}}/>
          <ListItem icon={require('../images/ic_wallet.png')} text={"钱包"}/>
          <View style={{width: width, height: 20}}/>
          <ListItem icon={require('../images/ic_collect.png')} text={"收藏"} />
          <ListItemDivider/>
          <ListItem icon={require('../images/ic_gallery.png')} text={"相册"} />
          <ListItemDivider/>
          <ListItem icon={require('../images/ic_kabao.png')} text={"卡包"} />
          <ListItemDivider/>
          <ListItem icon={require('../images/ic_emoji.png')} text={"表情"}/>
          <View style={{width: width, height: 20}}/>
          <ListItem icon={require('../images/ic_settings.png')} text={"设置"} />
          <View style={{width: width, height: 20}}/>
        </ScrollView>
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
    flexDirection: 'column',
    backgroundColor: Global.pageBackgroundColor,
  },
  tabBarIcon: {
    width: 24,
    height: 24,
  },
  meInfoContainer: {
    width: width,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#FFFFFF',
    paddingTop: 10,
    paddingBottom: 10,
  },
  meInfoAvatar: {
    width: 60,
    height: 60,
  },
  meInfoTextContainer: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
  },
  meInfoNickName: {
    color: '#000000',
    fontSize: 16,
  },
  meInfoWeChatId: {
    color: '#999999',
    fontSize: 14,
    marginTop: 5,
  },
  meInfoQRCode: {
    width: 25,
    height: 25,
  }
});
