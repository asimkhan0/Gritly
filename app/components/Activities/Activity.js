import React from 'react';
import Text from '../CustomText'
import { View } from "native-base";
import { StyleSheet} from "react-native";
import { Bar } from 'react-native-progress';
import { Dimensions } from 'react-native';

const WIDTH = Dimensions.get('window').width;

export default Activities = props => {

    return (
        <View style={styles.container}>
            <View  style={styles.activitiesTitleContainer}>
                <Text medium style={styles.activitiesTitleText}>
                    {props.title}
                </Text>
            </View>
                <View style={styles.progressContainer}>
                    <Bar progress={props.percentage}
                         width={(WIDTH/3)*2}
                         height={12}
                         color={props.barsColor}
                         borderColor={'#EAF2FA'}
                         borderRadius={10}
                         unfilledColor={'#EAF2FA'}
                    />
                </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginBottom:18
    },
    activitiesTitleContainer:{
        flex:1
    },
    activitiesTitleText: {
        color: '#8DABC4',
        fontSize:14,
    },
    progressContainer: {
        flex:3
    },

});