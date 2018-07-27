import React from 'react';
import { Header, Left, Button, Icon, Body, Title, Right } from 'native-base';
import Text from '../CustomText';
import styles from './styles';

export default CustomHeader = (props) => {
    return(
        <Header style={styles.headerContainer}>
            <Left>
                <Button transparent>
                    <Icon
                        name={props.icon === 'back' ? 'arrow-left' : 'bars'}
                        type='FontAwesome'
                        style={styles.icon}
                    />
                </Button>
            </Left>
            <Body>
                <Text medium  style={styles.title}>{props.title}</Text>
                <Text regular style={styles.subTitle}>{props.subTitle}</Text>
            </Body>
            <Right>
                <Button transparent>
                    <Icon style={styles.icon} name='search' />
                </Button>
            </Right>
        </Header>
    );
}