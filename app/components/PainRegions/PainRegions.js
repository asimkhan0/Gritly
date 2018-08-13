import React from 'react';
import styles from './styles';
import Text from '../CustomText'
import { View } from "native-base";
import PainRegion from './PainRegion';

export default PainRegions = props => {

    return (
        <View style={styles.container}>
            <View>
                <Text medium style={styles.activitiesHeadingText}>
                    {props.header}
                </Text>
                <View>
                    <PainRegion title={'Left Leg'} percentage={0.5} barsColor={'#26C1C9'}/>
                    <PainRegion title={'Thosaric'} percentage={0.7} barsColor={'#FE7B20'}/>
                    <PainRegion title={'Cervical'} percentage={0.3} barsColor={'#81CA25'}/>
                    <PainRegion title={'Right Leg'} percentage={0.9} barsColor={'#C778DD'}/>
                </View>
            </View>
        </View>
    );
}