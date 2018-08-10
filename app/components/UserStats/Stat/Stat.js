import React from 'react';
import styles from './styles';
import Text from '../../CustomText/index'
import {Button, View} from "native-base";

export default class Stat extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headingTextContainer} >
                    <Text medium style={styles.headingText}>Referals</Text>
                </View>
                <Button transparent style={styles.headingIconContainer}>
                    <View style={styles.topRow}>
                        <Text bold style={styles.topText}>400</Text>
                    </View>
                    <View style={styles.bottomRow}>
                        <Text bold style={styles.leftText}>10 in</Text>
                        <Text style={styles.rightText}> | </Text>
                        <Text style={styles.rightText}>10 out</Text>
                    </View>
                </Button>
            </View>
        );
    }
}