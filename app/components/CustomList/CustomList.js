import React from 'react';
import {Text, List, ListItem, Left, Thumbnail, Body, Right, Icon, View, Button} from 'native-base';
import styles from './styles';
import {
    UserItem,
    NotificationItem,
    MessageItem,
    MessageSent,
    MessageRecieved,
    Row,
    Header,
    Invites } from './ListItems';

export default CustomList = (props) => {

    return(
        <View>
            {
                props.type === 'user'? <UserItem/> :
                props.type === 'notification'? <NotificationItem/>:
                props.type === 'message'? <MessageItem/>:
                props.type === 'messageView'? <View>
                    <MessageRecieved/>
                    <MessageSent/>
                    <MessageRecieved/>
                    <MessageSent/>
                </View>:
                props.type === 'table'? <View>
                    <Header/>
                    <Row data={'Right shoulder'}/>
                    <Row data={'Neck Back'}/>
                    <Row data={'Lower Abdomen'}/>
                    <Row data={'Arms'}/>
                    <Row data={'Lower Abdomen'}/>
                </View>:
                    props.type === 'invites'?
                    <Invites /> : null
            }
        </View>
    );
}