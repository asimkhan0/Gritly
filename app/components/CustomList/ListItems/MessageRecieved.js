import React from 'react';
import { View } from 'native-base';
import {StyleSheet, Image} from 'react-native';
import CustomText from '../../CustomText/index';

export default MessageRecieved = (props) => {

    return(
        <View style={styles.container}>
            <View style={styles.avatarContainer}>
                <Image style={styles.avatar}
                       source={require('../../../../assets/userAvatar.png')} />
            </View>
            <View style={styles.messagesContainer}>
                <CustomText medium style={styles.messageText}>To take a trivial example, which of us ever undertakes physical exercise, except to obtain some advantage from it? </CustomText>
                <Image style={styles.messageAttachment} source={require('../../../../assets/attachment.png')}></Image>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'row',
        paddingHorizontal: 17 ,
        paddingVertical: 8,
        backgroundColor: 'white',
        marginVertical:5
    },

    avatarContainer: {
        justifyContent:'flex-start'
    },
    avatar: {
        height: 30,
        width: 30
    },
    messagesContainer: {
        flex:1,
        marginLeft: 12,
        justifyContent:'center',
        backgroundColor: '#253851',
        padding: 10,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
        borderTopRightRadius: 4,

        //ios shadow
        shadowOpacity: 0.3,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0
        },
        //android shadow
        elevation: 2
    },
    messageText: {
        fontSize: 14,
        color: '#fff',
    },
    messageAttachment: {
        height: 116,
        width: 116
    },

});