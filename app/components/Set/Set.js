import React from 'react';
import styles from './styles';
import Text from '../CustomText/index'
import {View} from "native-base";
export default class Set extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        let props = this.props;
        return (
            <View style={[styles.setContainer, props.active ? styles.activeSetCont:styles.inactiveSetCont]}>
                {/*<View style={styles.setNameTextContainer}>*/}
                <Text bold style={[styles.setNameText, props.active ? styles.activeSetNameText:styles.inactiveSetNameText ]}>SET 1</Text>
                {/*</View>*/}
                {/*<View style={styles.setDetailsTextContainer}>*/}
                <Text bold style={[styles.setDetailsText,props.active ? styles.activeSetDetailsText:styles.inactiveSetDetailsText]}>25 lbs 8</Text>
                {/*</View>*/}
            </View>
        );
    }
}