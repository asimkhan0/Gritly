import React from 'react';
import { Header, Left, Button, Icon, Body, Title, Right } from 'native-base';
import styles from './styles';

export default CustomHeader = (props) => {
    return(
        <Header>
            <Left>
                <Button transparent>
                    <Icon name='menu' />
                </Button>
            </Left>
            <Body>
                <Title>{props.title}</Title>
            </Body>
            <Right>
                <Button transparent>
                    <Icon name='search' />
                </Button>
            </Right>
        </Header>
    );
}