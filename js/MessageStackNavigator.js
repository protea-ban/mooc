import { StackNavigator } from 'react-navigation';
import STRING from './const_string_zh_CN';
import MessagePage from './message_tab_page';


const MessageNavigationOptions = {
  headerTitle: STRING.message_page_title,
  tabBarIcon: ({ tintColor }) => (
      <Icon name='chatbubbles' />
  ),
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

export default MOOCMessageStackNavigator;
