import React from 'react';
import styles from './styles';
import Text from '../../../CustomText/index'
import {View, Button} from "native-base";
export default class ModalHeader extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        let props = this.props;
        return (
            <View style={styles.modalHeaderContainer}>
                <Text medium style={styles.modalHeadingText}>
                    Edit: {props.heading}
                </Text>
                <Button transparent onPress={this.props.onClose}>
                    <Text medium style={styles.modalSubmitText}>
                        Submit
                    </Text>
                </Button>
            </View>
        );
    }
}