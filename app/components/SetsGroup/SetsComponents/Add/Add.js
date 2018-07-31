import React from 'react';
import styles from './styles';
import Text from '../../../CustomText/index'
import {View, Icon} from "native-base";

export default class Add extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        let props = this.props;
        return (
            <View style={styles.addContainer}>
               <Icon style={styles.addIcon} type={'FontAwesome'} name={'plus'} />
            </View>
        );
    }
}