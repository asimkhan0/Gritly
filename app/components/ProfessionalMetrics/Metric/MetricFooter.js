import React from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'native-base';
import Text from '../../CustomText';

export default MetricFooter = (props) => {

    return (
        <View style={styles.footerContainer}>
            <Text medium style={styles.footerText}>Gender</Text>
            <Text medium style={styles.footerText}>Age Group</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    footerContainer: {
        flexDirection:'row',
        justifyContent: 'space-between',
    },
    footerText: {
        fontSize:12,
        color: '#fff'
    }
});
