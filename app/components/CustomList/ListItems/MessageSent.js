import React from 'react';
import {Text, List, ListItem, Left, Thumbnail, Body, Right, Icon, View, Button} from 'native-base';
import {StyleSheet, Image} from 'react-native';
import CustomText from '../../CustomText/index';

export default MessageSent = (props) => {

    return(
        <View style={styles.container}>
            <View style={styles.messagesContainer}>
                <CustomText medium style={styles.messageText}>Hello? </CustomText>
                {/*<Image style={styles.messageAttachment} source={require('../../../assets/attachment.png')}></Image>*/}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'row',
        justifyContent:'flex-end',
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
        // flex:1,
        marginLeft: 12,
        justifyContent:'center',
        backgroundColor: '#ECF5FD',
        padding: 9,
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
        fontSize: 13,
        color: '#253851'
    },
    messageAttachment: {
        height: 116,
        width: 116
    },

});