import { StackNavigator } from 'react-navigation';
import STRING from './const_string_zh_CN';
import Two from './two';


const CourseMainOptions = {
    headerTitle: STRING.me_page_title,
    headerStyle: {backgroundColor:'black'},
    headerTitleStyle: {
        color: 'white',
        textAlign: 'center',
        // alignSelf: 'center',  设置导航栏字体居中
    },
}

const MOOCmeStackNavigator = StackNavigator({
    CourseTab: { screen: Two, navigationOptions: CourseMainOptions },
}, {
        //headerMode: 'none'
    });

export default MOOCmeStackNavigator;
