import React from 'react';
import { View } from 'native-base';
import styles from './styles';
import {Image, TouchableOpacity} from "react-native";
import Text from '../CustomText';

export default GraphChart = (props) => {

    return(
        <View style={styles.container}>
            <View style={styles.humanPicContainer}>
                <Image source={require('../../../assets/humanFront.png')}
                       style={styles.humanPic}
                />
            </View>
            <View style={styles.bodyTabsContainer}>
                <TouchableOpacity>
                    <Text semiBold style={[styles.tabText,styles.selectedTab]}>Left</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text semiBold style={[styles.tabText]}>Front</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text semiBold style={[styles.tabText]}>Right</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text semiBold style={[styles.tabText]}>Back</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}
