import React from 'react';
import {Button, Footer,FooterTab} from "native-base";
import Text from '../../CustomText';

import {StyleSheet} from "react-native";

export default class ButtonFooter extends React.Component {


    render() {

        return (
            <Footer>
                <FooterTab style={styles.container}>
                    <Button onPress={this.props.onPress}>
                        <Text medium style={styles.submitButtonText}>{this.props.title}</Text>
                    </Button>
                </FooterTab>
            </Footer>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#18C4C1',
   },
    submitButtonText: {
        fontSize: 14,
        color: '#fff',
    }
});