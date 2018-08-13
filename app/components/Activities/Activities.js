import React from 'react';
import styles from './styles';
import Text from '../CustomText'
import { View } from "native-base";
import Activity from './Activity';

export default Activities = props => {

    return (
        <View style={styles.container}>
            <View>
                <Text medium style={styles.activitiesHeadingText}>
                    {props.header}
                </Text>
                <View>
                    <Activity title={'Deadlifts'} percentage={0.5} barsColor={props.barsColor}/>
                    <Activity title={'Barbel Rows'} percentage={0.7} barsColor={props.barsColor}/>
                    <Activity title={'Jogging'} percentage={0.3} barsColor={props.barsColor}/>
                </View>
            </View>
        </View>
    );
}