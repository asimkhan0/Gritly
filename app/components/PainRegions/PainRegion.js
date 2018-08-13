import React from 'react';
import Text from '../CustomText'
import { View } from "native-base";
import { StyleSheet} from "react-native";
import { Bar } from 'react-native-progress';
import { Dimensions } from 'react-native';

const WIDTH = Dimensions.get('window').width;

export default PainRegion = props => {

    return (
        <View style={styles.container}>
                <Text medium style={styles.activitiesTitleText}>
                    {props.title}
                </Text>
                    <Bar progress={props.percentage}
                         width={(WIDTH -28)}
                         height={12}
                         color={props.barsColor}
                         borderColor={'#EAF2FA'}
                         borderRadius={10}
                         unfilledColor={'#EAF2FA'}
                    />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent:'center',
        marginBottom:8
    },

    activitiesTitleText: {
        color: '#8DABC4',
        fontSize:14,
        paddingBottom: 5
    },

});