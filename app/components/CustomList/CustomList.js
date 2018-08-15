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
    Header, } from './ListItems';

export default CustomList = (props) => {

    return(
        <View>
            {
                props.type === 'user'? <UserItem avatar subTitle progress/> :
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
                    props.type === 'library'? <UserItem avatar subTitle/> :
                    props.type === 'user_groups'? <UserItem /> :
                    props.type === 'referrals'? <UserItem subTitle/> :
                    props.type === 'trackers'? <UserItem />:
                    props.type === 'invites'? <View>
                        <UserItem invites avatar/>
                        <UserItem invites avatar/>
                        <UserItem invites avatar/>
                    </View>: null
            }
        </View>
    );
}
/* SELF NOTES

    Will make rendering components to return for each type, which will map the
    incoming dataset accordingly.
 */