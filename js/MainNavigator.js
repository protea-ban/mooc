import { StackNavigator } from 'react-navigation';
import STRING from './const_string_zh_CN';
import LoginPage from './login_page';
import { Text } from 'react-native';
import TabNavigator from './TabNavigator'

const navigationOptions = {
    headerTitle: STRING.appname,
    headerStyle: {backgroundColor:'black'},
    headerTitleStyle: {
        color: 'white',
        textAlign: 'center',
        // alignSelf: 'center',  设置导航栏字体居中
    },
}

const MOOCNavigator = StackNavigator({
    Login: { screen: LoginPage, navigationOptions: navigationOptions },
    Tab: { screen: TabNavigator, navigationOptions: { header: null } },
}, {

    });

export default MOOCNavigator;
