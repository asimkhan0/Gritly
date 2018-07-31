import React from 'react';
import styles from './styles';
// import Text from '../CustomText'
import {Button, View, Text} from "native-base";
import { ScrollView } from 'react-native';
import {Add, Set} from './SetsComponents';

export default class SetsGroup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.setHeaderContainer}>
                    <Text medium style={styles.setTitle}>{this.props.setTitle}</Text>
                    <Text medium style={styles.setEdit}>Edit</Text>
                </View>
                <ScrollView
                    style={styles.setsContainer}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    <Set active={true}/>
                    <Set active={false}/>
                    <Set active={false}/>
                    <Add />

                </ScrollView>
            </View>
        );
    }
}