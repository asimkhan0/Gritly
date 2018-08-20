import React from 'react';
import { Header, Left, Button, Icon, Body,  Right } from 'native-base';
import {Image} from 'react-native';
import Text from '../CustomText';
import styles from './styles';
import PropTypes from 'prop-types';

export default CustomHeader = (props) => {
    return(
        <Header style={styles.headerContainer}>
            <Left>
                <Button transparent onPress={props.iconPress ? props.iconPress : () => {props.navigation.openDrawer()}}>
                    <Icon
                        name={props.icon === 'back' ? 'arrow-left' : 'bars'}
                        type='FontAwesome'
                        style={styles.icon}
                    />
                </Button>
            </Left>
            <Body>
                <Text medium  style={styles.title}>{props.title}</Text>
                {props.subTitle? <Text regular style={styles.subTitle}>{props.subTitle}</Text>:null}
            </Body>
            <Right>
                <Button transparent onPress={!props.rightIcon ? () => props.navigation.navigate('search'): null}>
                    {props.rightIcon === 'filter'?
                        <Image style={styles.filterImg} source={require('../../../assets/filter.png')}/>
                        :
                        <Icon style={styles.icon} name='search'/>
                    }
                </Button>
            </Right>
        </Header>
    );
}

CustomHeader.propTypes = {
    title: PropTypes.string,
    icon: PropTypes.string,
    iconPress: PropTypes.func
}

CustomHeader.defaultProps = {

}