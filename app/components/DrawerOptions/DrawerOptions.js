import React from 'react';
import styles from './styles';
import { View } from "native-base";
import Option from './Option';
import { Image } from 'react-native';

export default Activities = props => {
    return (
        <View style={styles.container}>
            <Option title='Profile' onPress={() => props.navigation.navigate('profile')}>
                <Image style={styles.image} source={require('../../../assets/drawer/profile.png')}/>
            </Option>
            <Option title='Programs' onPress={() => props.navigation.navigate('programs')}>
                <Image style={styles.image} source={require('../../../assets/drawer/programs.png')}/>
            </Option>
            <Option title='Todo' onPress={() => props.navigation.navigate('todo')}>
                <Image style={styles.image} source={require('../../../assets/drawer/programs.png')}/>
            </Option>
            <Option title='Pain Points' onPress={() => props.navigation.navigate('painPoints')}>
                <Image style={styles.image} source={require('../../../assets/drawer/programs.png')}/>
            </Option>
            <Option title='User Groups' onPress={() => props.navigation.navigate('userGroups')}>
                <Image style={styles.image} source={require('../../../assets/drawer/usergroups.png')}/>
            </Option>
            <Option title='Referrals' onPress={() => props.navigation.navigate('referrals')}>
                <Image style={styles.image} source={require('../../../assets/drawer/referrals.png')}/>
            </Option>
            <Option title='Invites' onPress={() => props.navigation.navigate('invites')}>
                <Image style={styles.image} source={require('../../../assets/drawer/invites.png')}/>
            </Option>
            <Option title='Library' onPress={() => props.navigation.navigate('library')}>
                <Image style={styles.image} source={require('../../../assets/drawer/library.png')}/>
            </Option>
            <Option title='Settings' onPress={() => props.navigation.navigate('settings')}>
                <Image style={styles.image} source={require('../../../assets/drawer/settings.png')}/>
            </Option>
            <Option title='Trackers' onPress={() => props.navigation.navigate('trackers')}>
                <Image style={styles.image} source={require('../../../assets/drawer/trackers.png')}/>
            </Option>
            <Option title='Logout' onPress={() => {}}>
                <Image style={styles.image} source={require('../../../assets/drawer/logout.png')}/>
            </Option>
        </View>
    );
}