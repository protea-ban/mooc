import { StackNavigator } from 'react-navigation';
import { Image, StyleSheet} from 'react-native';
import STRING from './const_string_zh_CN';
import MessagePage from './message_tab_page';


const MessageNavigationOptions = {
  headerTitle: STRING.message_page_title,
  // tabBarIcon: ({ tintColor }) => (
  //   <Icon name='person' />
  // ),
  headerStyle: {backgroundColor:'black'},
    headerTitleStyle: {
        color: 'white',
        textAlign: 'center',
        // alignSelf: 'center',  设置导航栏字体居中
    },
}

const MOOCMessageStackNavigator = StackNavigator({
    MessageTab: { screen: MessagePage, navigationOptions: MessageNavigationOptions },
}, {
        //headerMode: 'none'
    });

    const styles = StyleSheet.create({
      tabBarIcon: {
        width: 24,
        height: 24,
      },
    });

export default MOOCMessageStackNavigator;
