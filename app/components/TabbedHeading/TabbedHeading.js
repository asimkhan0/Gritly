import React from 'react';
import { Switch, View, Left,Right } from 'native-base';
import { Image } from 'react-native';
import Text from '../CustomText';
import styles from './styles';
import PropTypes from 'prop-types';

export default RestToggle = (props) => {

    return(
        <View style={styles.restContainer}>

            <Left>
                <View style={styles.leftView}>
                    {props.children}
                    <View style={styles.restTextContainer}>
                        <Text medium style={styles.restText} >{props.title}</Text>
                    </View>
                </View>
            </Left>
            <Right>
                {props.toggle? <View style={styles.toggleContainer}>
                    <Switch style={styles.toggle}
                            value={false}
                            onValueChange={(value) => {console.warn(value)}}
                    />
                </View>: null}
            </Right>
        </View>
    );
}

RestToggle.propTypes = {
    title: PropTypes.string.isRequired,
    toggle: PropTypes.bool,
    children: PropTypes.element
}

RestToggle.defaultProps = {
    toggle: false
}