import React from 'react';
import styles from './styles';
import Text from '../CustomText/index'
import {View, Button, Icon} from "native-base";
import { TouchableOpacity } from "react-native";

export default class SetsHeader extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <View style={styles.setHeaderContainer}>
                {/*<Button transparent>*/}
                    <Text medium style={styles.setTitle}>{this.props.title}</Text>
                {/*</Button>*/}
                <TouchableOpacity transparent onPress={this.props.onEdit}>
                    <Text medium style={styles.setEdit}>Edit</Text>
                    {/*<Icon type={'FontAwesome'} name={'ellipsis-h'}></Icon>*/}
                </TouchableOpacity>
            </View>
        );
    }
}