import { StackNavigator } from 'react-navigation';
import STRING from './const_string_zh_CN';
import Three from './three';


const CourseMainOptions = {
    headerTitle: STRING.discovery_page_title,
    headerStyle: {backgroundColor:'black'},
    headerTitleStyle: {
        color: 'white',
        textAlign: 'center',
        // alignSelf: 'center',  设置导航栏字体居中
    },
}

const MOOCdisStackNavigator = StackNavigator({
    CourseTab: { screen: Three, navigationOptions: CourseMainOptions },
}, {
        //headerMode: 'none'
    });

export default MOOCdisStackNavigator;
