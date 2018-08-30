import React from 'react';
import styles from "./styles";
import {Image, TouchableOpacity,Dimensions} from "react-native";
import {View} from "native-base";
import Text from '../CustomText';
import {Bar} from "react-native-progress";

const WIDTH = Dimensions.get('window').width;

export default TodoViewHeading = (props) => {

    const {bgColor} = props;
    return(
        <View style={[styles.container,{backgroundColor:bgColor}]}>
            <View style={styles.left}>
                <Text bold   style={styles.todoHeading}>SHOULDER INJURY STABILITY</Text>
                <Text medium style={styles.todoSubtitle}>4 Exercise by Nick Texune</Text>
                <View style={styles.barContainer}>
                    <Bar progress={0.5}
                         width={WIDTH/2}
                         height={12}
                         color={'#fff'}
                         borderColor={bgColor}
                         borderRadius={10}
                        // unfilledColor={'#EAF2FA'}
                         unfilledColor={'rgba(255,255,255,0.4)'}
                    />
                </View>
                <View style={styles.trainerInfoContainer}>
                    <Image source={require('../../../assets/trainerPic30.png')}
                           height={30}
                           width={30}
                           style={styles.trainerImg}
                    />
                    <Text medium style={styles.trainerNameText}>Stefan McMohan</Text>
                </View>
            </View>
            <View style={styles.right}>
                <Image source={require('../../../assets/todoView.png')}
                       style={{opacity:0.2}}
                />

            </View>
        </View>
    )
}