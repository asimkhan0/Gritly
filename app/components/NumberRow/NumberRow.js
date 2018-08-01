import React from 'react';
import styles from './styles';
import Text from '../CustomText'
import {View, Icon} from "native-base";
export default class NumberRow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        let props = this.props;
        return (
            <View style={styles.numberContainer}>
                <View style={styles.numberTitle}>
                    <Text medium style={styles.numberTitleText}>{this.props.title}</Text>
                </View>

                <View style={styles.numberViewContainer}>
                    <Icon type={'FontAwesome'}
                          name={'minus-circle'}
                          style={styles.icon}
                    ></Icon>
                    <Text bold style={styles.numberText}>6</Text>
                    <Icon
                        type={'FontAwesome'}
                        name={'plus-circle'}
                        style={styles.icon}
                    ></Icon>
                </View>
            </View>
        );
    }
}