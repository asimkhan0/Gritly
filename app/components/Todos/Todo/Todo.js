import React from 'react';
import {FlatList, TouchableOpacity, Image, Dimensions} from 'react-native';
import styles from './styles';
import Text from '../../CustomText'
import {Button, View, Icon} from "native-base";
import { Bar } from 'react-native-progress';

const WIDTH = Dimensions.get('window').width;

export default class Todo extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        let {bgColor} = this.props;
        return (
            <TouchableOpacity style={[styles.container,{backgroundColor:bgColor}]}>
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
                </View>
                <View style={styles.right}>
                    <Image source={require('../../../../assets/todo100.png')}
                        style={{opacity:0.5}}
                    />

                </View>
            </TouchableOpacity>
        );
    }
}