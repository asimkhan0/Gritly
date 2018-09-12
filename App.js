import React, {Component} from 'react';
import { Provider } from 'react-redux';
import store from './app/store';
import {createDrawerNavigator, createStackNavigator, createSwitchNavigator} from 'react-navigation';
import {Dimensions} from 'react-native';

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

import Client from './app/screens/Client';
import LeftMenu from './app/screens/LeftMenu';
import Programs from './app/screens/Programs';
import UserGroups from './app/screens/UserGroups';
import Referrals from './app/screens/Referrals';
import Invites from './app/screens/Invites';
import Library from './app/screens/Library';
import Settings from './app/screens/Settings';
import Trackers from './app/screens/Trackers';
import Dashboard from './app/screens/Dashboard';
import Profile from './app/screens/Profile';
import Notifications from './app/screens/Notifications';
import Messages from './app/screens/MessageInbox';
import Search from './app/screens/Search';
import MessageView from './app/screens/MessageView';
import SearchResults from './app/screens/SearchResults';

import ProgramView from './app/screens/ProgramView';
import SelectCategory from './app/screens/SelectCategory';
import SelectType from './app/screens/SelectType';
import AddInfo from './app/screens/AddInfo';
import General from './app/screens/General';
import Cardio from './app/screens/Cardio';
import Weight from './app/screens/Weight';
import AllVideos from './app/screens/AllVideos';
import Attach from './app/screens/Attach';


import Todo from './app/screens/Todo';
import EnterTrackerData from './app/screens/EnterTrackerData';
import EnterProgramData from './app/screens/EnterProgramData';
import ExerciseView from './app/screens/ExerciseView';
import EnterPainPoints from "./app/screens/EnterPainPoints";
import PainPoints from "./app/screens/PainPoints";
import PainPoint from "./app/screens/PainPoint";


import Splash from './app/screens/Splash';
import SelectOrganization from './app/screens/SelectOrganization';
import Login from './app/screens/Login';
import SecondLogin from './app/screens/secondLogin';
import Signup from './app/screens/SignUp';



import {Fonts} from './app/utils/Fonts';

const WIDTH = Dimensions.get('window').width;
const HeaderStyle = {
    headerStyle: {
        backgroundColor: '#F7F7F7',
        elevation:0
    },
    headerTintColor: '#000',
    headerTitleStyle: {
        fontSize: 15,
        fontFamily:Fonts.MontSerratMedium,
        fontWeight: '400'
    },
};


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
        <Provider store={store}>
            <EnterPainPoints />
        </Provider>
    );
  }
}

const AuthStack = createStackNavigator({
    login: Login,
    secondLogin: SecondLogin,
    selectOrganization: SelectOrganization,
    signup: Signup,
});

const ProgramsStack = createStackNavigator({
    programs: Programs,
    programView: ProgramView,
    selectCategory: SelectCategory,
    addInfo: AddInfo,
    selectType: SelectType,
    general: General,
    cardio: Cardio,
    weight: Weight,
    allVideos: AllVideos,
    attach: Attach
}, {
    initialRouteName: 'programs',
    navigationOptions: HeaderStyle
});

const MessagesStack = createStackNavigator({
    messages: Messages,
    messageView: MessageView,
}, {
    initialRouteName: 'messages',
    navigationOptions: HeaderStyle
});

const TodoStack = createStackNavigator({
    todo: Todo,
    enterProgramData: EnterProgramData,
    exerciseView: ExerciseView,
    enterTrackerData: EnterTrackerData

}, {
    initialRouteName: 'todo',
    navigationOptions: HeaderStyle
});

const PainPointStack = createStackNavigator({
    painPoints: PainPoints,
    enterPainPoints: EnterPainPoints,
    painPoint: PainPoint,
}, {
    initialRouteName: 'painPoints',
    navigationOptions: HeaderStyle
});

const SearchStack = createStackNavigator({
    search: Search,
    searchResults: SearchResults,
}, {
    initialRouteName: 'search',
    navigationOptions: HeaderStyle
});

const Drawer = createDrawerNavigator({
    dashboard: {
        screen: Dashboard,
    },

    profile: {
        screen: Profile,
    },
    programs: {
        screen: ProgramsStack,
    },
    todo: {
        screen: TodoStack,
    },
    painPoints: {
        screen: PainPointStack,
    },
    userGroups: {
        screen: UserGroups,
    },
    referrals: {
        screen: Referrals,
    },
    invites: {
        screen: Invites,
    },
    library: {
        screen: Library,
    },
    settings: {
        screen: Settings,
    },
    trackers: {
        screen: Trackers,
    },

    clients: {
        screen: Client,
    },
    notifications: {
        screen: Notifications,
    },
    messages: {
        screen: MessagesStack,
    },

    search: {
        screen: SearchStack,
    },
}, {
    contentComponent: LeftMenu,
    drawerWidth: WIDTH * 0.80,
    drawerPosition: 'left',
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
});

// export default AppNavigator = createSwitchNavigator({
//     splash: Splash,
//     auth: AuthStack,
//     home: Drawer,
// })