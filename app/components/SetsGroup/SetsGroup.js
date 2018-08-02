import React from 'react';
import styles from './styles';
// import Text from '../CustomText'
import {Button, View, Text} from "native-base";
import { ScrollView, TouchableOpacity } from 'react-native';
import {Add} from './SetsComponents';
import Set from '../Set'
import SetsHeader from "../SetsHeader";

export default class SetsGroup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <View style={styles.container}>

                {this.props.header ? <SetsHeader {...this.props} />: null}
                <ScrollView
                    style={styles.setsContainer}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    <Set active={true}/>
                    <Set active={false}/>
                    <Set active={false}/>
                    {this.props.onAddSet ? <Add /> : null}
                </ScrollView>
            </View>
        );
    }
}

/*

<View style={styles.setHeaderContainer}>
                    <TouchableOpacity>
                        <Text medium style={styles.setTitle}>{this.props.setTitle}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.props.onEdit}>
                        <Text medium style={styles.setEdit}>Edit</Text>
                    </TouchableOpacity>
                </View>

 */