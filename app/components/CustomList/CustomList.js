import React from 'react';
import {Text, List, ListItem, Left, Thumbnail, Body, Right, Icon, View, Button} from 'native-base';
import styles from './styles';
import {UserItem, NotificationItem, MessageItem,MessageSent,MessageRecieved} from './ListItems';

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
                </View>: null
            }
        </View>
    );
}