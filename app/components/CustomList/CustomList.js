import React from 'react';
import { View } from 'native-base';

import {
    UserItem,
    NotificationItem,
    MessageItem,
    MessageSent,
    MessageRecieved,
    Row,
    Header,
    Comment
} from './ListItems';

export default CustomList = (props) => {
    return(
        <View>
            {
                props.type === 'user'? <UserItem avatar subTitle progress/> :
                props.type === 'notification'? <NotificationItem/>:
                props.type === 'message'? <MessageItem onPress={() => {props.navigation.navigate('messageView')}} />:
                props.type === 'messageView'? <View>
                    <MessageRecieved/>
                    <MessageSent/>
                    <MessageRecieved/>
                    <MessageSent/>
                </View>:
                props.type === 'table'? <View>
                    <Header/>
                    <Row data={'Right shoulder'} onPress={props.onPress}/>
                    <Row data={'Neck Back'} onPress={props.onPress}/>
                    <Row data={'Lower Abdomen'} onPress={props.onPress}/>
                    <Row data={'Arms'} onPress={props.onPress}/>
                    <Row data={'Lower Abdomen'} onPress={props.onPress}/>
                </View>:
                    props.type === 'library'? <UserItem avatar subTitle/> :
                    props.type === 'user_groups'? <UserItem /> :
                    props.type === 'referrals'? <UserItem subTitle/> :
                    props.type === 'trackers'? <UserItem />:
                    props.type === 'invites'? <View>
                        <UserItem invites avatar/>
                        <UserItem invites avatar/>
                        <UserItem invites avatar/>
                    </View>:
                        props.type === 'comments'? <View>
                            <Comment />
                        </View>: null
            }
        </View>
    );
}
/* SELF NOTES

    Will make rendering components to return for each type, which will map the
    incoming dataset accordingly.
 */