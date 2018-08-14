import React from 'react';
import { View, Button } from 'native-base';
import Text from '../CustomText';
import styles from './styles';
import Hr from '../Hr/Hr'
export default ActivityGroup = props =>{

    return(
        <View style={styles.container}>
            <View style={styles.groupHeadingContainer}>
                <Text medium style={styles.headingText}>{props.title}</Text>
                <Button small transparent>
                    <Text medium style={styles.editText}>Edit</Text>
                </Button>
            </View>
            <Hr/>
            <View style={styles.groupContentContainer}>
                <Text medium style={styles.contentText}>1. Scalene Stretch</Text>
                <Text medium style={styles.contentText}>2. Shrugs</Text>
                <Text medium style={styles.contentText}>3. Scaption</Text>
            </View>
        </View>
    )
}