import React from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'native-base';
import Text from '../../CustomText'
export default MetricHeader = (props) => {

    return (
        <View style={styles.dataPartsRow}>
            <DataRow title={'Male'} circleColor={'#fff'}/>
            <DataRow title={'Female'} circleColor={'#629C18'}/>
            <DataRow title={'Neutrals'} circleColor={'#C0F183'}/>

        </View>
    )
}


DataRow = (props) => {
    return (
        <View style={styles.dataPart}>
            <View style={[styles.circle,{backgroundColor:props.circleColor}]}></View>
            <Text medium style={styles.titleText}>{props.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    dataPartsRow: {
        flexDirection:'row',
        justifyContent: 'space-between',

    },
    dataPart: {
        flexDirection:'row',
        // justifyContent:'space-between'
        alignItems:'center'
    },
    circle: {
        backgroundColor: '#f00',
        borderRadius:100,
        height: 15,
        width: 15,
        marginRight: 3
    },
    titleText: {
        color: '#fff',
        fontSize:12,
        marginRight: 8
    }
});
