import React from 'react';
import { View } from 'native-base';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import CustomText from '../../CustomText/index';

export default MessageItem = (props) => {

    return(
        <TouchableOpacity style={styles.container} onPress={props.onPress}>
            <View style={styles.leftContainer}>
                <View style={styles.avatarContainer}>
                    <Image style={styles.avatar}
                           source={require('../../../../assets/userAvatar.png')} />
                </View>
                <View style={styles.messagesContainer}>
                    <CustomText medium style={styles.senderNameText}>Rachel Mosby</CustomText>
                    <CustomText medium style={styles.lastMessageText}>Bye…. talk to you soon.</CustomText>
                </View>
            </View>
            <View style={styles.rightContainer}>
                <View style={styles.lastMessageTimeContainer}>
                    <CustomText medium style={styles.lastMessageTimeText}>2h ago</CustomText>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'row',
        paddingHorizontal: 9,
        paddingVertical: 8,
        marginVertical:1,
        backgroundColor: 'white',
        borderBottomColor:'#CBE6EF',
        borderBottomWidth:1
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

    lastMessageTimeText: {
        color:'#8DABC4',
        fontSize: 10,
    },
    avatarContainer: {
        justifyContent:'center'
    },
    avatar: {
        height: 50,
        width: 50
    },
    messagesContainer: {
        flex:1,
        marginLeft: 9,
        justifyContent:'center'
    },
    senderNameText: {
        fontSize: 14,
        color: '#253851'
    },
    lastMessageText: {
        fontSize: 10,
        color: '#8DABC4'
    },

    lastMessageTimeContainer: {
        justifyContent:'center',
    },
});