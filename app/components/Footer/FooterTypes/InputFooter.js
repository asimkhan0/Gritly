import React from 'react';
import {Input, Footer,FooterTab} from "native-base";
import Image from 'react-native-remote-svg';
import {StyleSheet} from "react-native";

export default class CustomFooter extends React.Component {


    render() {

        return (
            <Footer>
                <FooterTab style={styles.container}>
                    <Input  placeholder="Type message here" />
                </FooterTab>
            </Footer>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        borderTopColor:'#707070',
        borderTopWidth: 1
    }
})