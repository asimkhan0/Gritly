import React from 'react';
import { Switch, View } from 'native-base';
import Text from '../CustomText';
import styles from './styles';

export default RestToggle = (props) => {

    return(
        <View style={styles.restContainer}>
            <View style={styles.restTextContainer}>
                <Text medium style={styles.restText} >Rest 30 sec between sets</Text>
            </View>
            <View style={styles.toggleContainer}>
                <Switch style={styles.toggle} value={false} onValueChange={(value) => {console.warn(value)}}/>
            </View>
        </View>
    );
}