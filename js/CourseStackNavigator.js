import { StackNavigator } from 'react-navigation';
import STRING from './const_string_zh_CN';
import MessagePage from './three';


const CourseMainOptions = {
    headerTitle: STRING.class_page_title,
    headerStyle: {backgroundColor:'black'},
    headerTitleStyle: {
        color: 'white',
        textAlign: 'center',
        // alignSelf: 'center', 设置导航栏字体居中
    },
}

const MOOCcourseStackNavigator = StackNavigator({
    CourseTab: { screen: MessagePage, navigationOptions: CourseMainOptions },
}, {
        //headerMode: 'none'
    });

export default MOOCcourseStackNavigator;
