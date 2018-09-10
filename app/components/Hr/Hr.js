import React from 'react';
import { View } from 'native-base';
import { StyleSheet } from 'react-native';

export default Hr = (props) => {

    return(
        <View style={[styles.lineStyle,props.styles]} />
    );
}



const styles = StyleSheet.create({
    lineStyle: {
        borderWidth: 0.5,
        borderColor: '#707070',
    }
});