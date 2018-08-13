import React from 'react';
import {View,Text } from 'native-base';
import ProgramType from './ProgramType'
import styles from "./styles";
import {Image} from 'react-native';

export default ProgramTypes = (props) => {
    return(
        <View styles={[styles.container]}>
            <ProgramType title='General'>
                <Image source={require('../../../assets/cycle.png')} />
            </ProgramType>

            <ProgramType title='Cardio'>
                <Image source={require('../../../assets/cardio.png')} />
            </ProgramType>

            <ProgramType title='Weight'>
                <Image source={require('../../../assets/weight.png')} />
            </ProgramType>
            <Text style={{opacity: 0}}></Text>
            {/*this last line to add shadow to last Item. otherwise shadow doesn't work*/}
        </View>
    )
}