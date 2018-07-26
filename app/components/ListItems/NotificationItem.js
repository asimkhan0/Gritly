import React from 'react';
import {Text, List, ListItem, Left, Thumbnail, Body, Right, Icon, View, Button} from 'native-base';
import {StyleSheet, Image} from 'react-native';
import CustomText from '../CustomText/index';

export default NotificationItem = (props) => {

    return(
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <View style={styles.avatarContainer}>
                    <Image style={styles.avatar}
                           source={require('../../../assets/userAvatar.png')} />
                </View>
                <View style={styles.notificationContainer}>
                    <CustomText medium style={styles.notificationText}>Ted Mosby added you in Stallions Athletes</CustomText>
                    <CustomText regular style={styles.notificationDate}>March 05</CustomText>
                </View>
            </View>
            <View style={styles.rightContainer}>
                <View style={styles.notificationIconContainer}>
                        <Icon style={styles.notificationIcon} type='FontAwesome' name='circle'></Icon>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'row',
        paddingHorizontal: 9,
        paddingVertical: 8,
        marginVertical:1,
        backgroundColor: 'white'
    },
    leftContainer: {
        flex:9,
        flexDirection: 'row'
    },
    rightContainer: {
        flex:1,
        flexDirection: 'row',
        justifyContent:'flex-end'
    },

    notificationIcon: {
        color:'#8DABC4',
        fontSize: 6,
        color: '#253851'
    },
    avatarContainer: {
        justifyContent:'center'
    },
    avatar: {
        height: 40,
    },
    notificationContainer: {
        flex:1,
        marginLeft: 9,
        justifyContent:'center'
    },
    notificationText: {
        fontSize: 14,
        color: '#253851'

    },
    notificationDate: {
        fontSize: 10,
        color: '#8DABC4'
    },

    notificationIconContainer: {
        justifyContent:'flex-start',
        paddingTop: 7
    },
});