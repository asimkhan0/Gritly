import React, {Component} from 'react';
import { Provider } from 'react-redux';
import store from './app/store';
import {createDrawerNavigator, TabNavigator, createStackNavigator, createSwitchNavigator} from 'react-navigation';
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
import BloodSugarLevel from './app/screens/BloodSugarLevel';
import WarmupsAndStretches from './app/screens/WarmupsAndStretches';
import Pushups from './app/screens/Pushups';

import Login from './app/screens/Login';
import Signup from './app/screens/SignUp';



import {Fonts} from './app/utils/Fonts';

const WIDTH = Dimensions.get('window').width;

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
        <Provider store={store}>
            <Pushups />
        </Provider>
    );
  }
}


// const Tabs = TabNavigator({
//         dashboard: {screen: Dashboard},
//         clients:{screen: Client},
//          notifications:{screen: Notifications},
//         messages:{screen: Messages},
//         // More: {screen: More,
//         //     navigationOptions: {
//         //         tabBarLabel: 'More',
//         //         tabBarIcon: <Entypo name='dots-three-horizontal' size={25}/>,
//         //         header: null
//             // },
//         // }
//     },
//     {
//         initialRouteName: 'dashboard',
//         tabBarPosition: 'bottom',
//         navigationOptions: ({ navigation }) => ({
//             tabBarOnPress: (scene, jumpToIndex) => {
//                 debugger
//                 if (scene.scene.route.routeName === "More") {
//                     navigation.navigate('DrawerToggle')
//                 }
//                 else{
//                     // jumpToIndex(scene.scene.index);
//                     navigation.navigate(scene.scene.route.routeName)
//                 }
//             },
//         }),
//     },
// )

const AuthStack = createStackNavigator({
    login: Login,
    signup: Signup,
})

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
    navigationOptions: {
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
    },
})



const Drawer = createDrawerNavigator({
    programs: {
        screen: ProgramsStack,
    },
    profile: {
        screen: Profile,
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


    dashboard: {
        screen: Dashboard,
    },
    clients: {
        screen: Client,
    },
    notifications: {
        screen: Notifications,
    },
    messages: {
        screen: Messages,
    },

    search: {
        screen: Search,
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
//     auth: AuthStack,
//     home: Drawer,
// })