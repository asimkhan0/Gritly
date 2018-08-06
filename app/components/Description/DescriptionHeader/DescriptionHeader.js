import React from 'react';
import {Image} from 'react-native';
import styles from './styles';
import Text from '../../CustomText/index'
import {Button, View, Icon} from "native-base";
import SetsHeader from '../../SetsHeader/index';

export default class DescriptionHeader extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headingTextContainer} >
                    <Text medium style={styles.headingText}>Pushups</Text>
                    <Text medium style={styles.subHeadingText}>Posted 3h ago</Text>
                </View>
                <Button transparent style={styles.headingIconContainer}>
                    <Image style={styles.pencilIcon} source={require('../../../../assets/pencil100.png')} />
                </Button>
            </View>
        );
    }
}