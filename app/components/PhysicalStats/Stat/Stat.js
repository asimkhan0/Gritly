import React from 'react';
import styles from './styles';
import Text from '../../CustomText/index'
import {Button, View, Icon} from "native-base";
import { Image } from 'react-native';

export default class Stat extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }


    render() {
        return (
            <View style={[styles.container,{...this.props.style}]}>
                <View style={styles.headingTextContainer} >
                    <Text medium style={styles.headingText}>Rest Heart Rate</Text>
                </View>
                {/*<View style={styles.measureTextContainer} >*/}
                    <Text bold style={styles.valueText}>500 GALLOn</Text>
                {/*</View>*/}
                {/*<View style={styles.iconContainer} >*/}
                    <Image style={styles.icon} source={require('../../../../assets/arrowdown.png')} />
                {/*</View>*/}
            </View>
        );
    }
}