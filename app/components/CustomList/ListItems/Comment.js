import React from 'react';
import {Text, List, ListItem, Left, Thumbnail, Body, Right, Icon, View, Button} from 'native-base';
import {StyleSheet, Image} from 'react-native';
import CustomText from '../../CustomText/index';

export default Comment = (props) => {

    return(
        <View style={styles.container}>
            <View style={styles.avatarContainer}>
                <Image style={styles.avatar}
                       source={require('../../../../assets/userAvatar.png')} />
                <CustomText medium style={styles.timeText}>2h ago</CustomText>

            </View>
            <View style={styles.messagesContainer}>
                <CustomText medium style={styles.messageText}>To take a trivial example, which of us ever undertakes physical exercise, except to obtain some advantage from it? </CustomText>
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
        // marginVertical:5
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
        backgroundColor: '#F4F4F4',
        padding: 10,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
        borderTopRightRadius: 4,
    },
    messageText: {
        fontSize: 14,
        color: '#253851',
    },
    messageAttachment: {
        height: 116,
        width: 116
    },
    timeText: {
        color: '#8DABC4',
        fontSize: 9
    }
});