import React from 'react';
import {TouchableOpacity} from 'react-native';
import styles from './styles';
import Text from '../CustomText'
import {Button, View, Icon} from "native-base";
import SetsHeader from '../SetsHeader';

export default class LBS extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <SetsHeader title={this.props.title}
                                onEdit={()=> console.log('Edit BPM Setheader')}/>
                </View>

                <View style={styles.restingViewContainer}>
                    <Text medium style={styles.text}>Resting Tested</Text>
                    <Text medium style={[styles.text,styles.numberText]}>1</Text>
                    <Text medium style={styles.text}>Weight(lbs)</Text>
                    <Text medium style={[styles.text,styles.numberText]}>100</Text>
                    <Text medium style={styles.text}>= 200lbs</Text>

                </View>
                <Button small style={styles.addHrContainer}>
                    <Text medium style={[styles.text,styles.addHRText]}>Set New Max</Text>
                </Button>
            </View>
        );
    }
}