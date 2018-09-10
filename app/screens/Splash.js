'use strict';

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Logo from '../../assets/logo.png';

import {
    Container,
    View
}
    from 'native-base';
import { Image, ImageBackground } from 'react-native';
import * as Actions from '../actions';

export default class SignUp extends Component {

    static navigationOptions = {
        header: null
    };
    componentDidMount () {
        setTimeout(() => this.props.navigation.navigate('login'),2000)
    }
    render() {
        return (
            <Container style={[styles.container]}>
                <ImageBackground source={require('../../assets/splashbg.png')} style={{ flex: 1, height: null, width: null }} >
                    <View style={styles.logoContainer}>
                        <Image style={styles.logo} source={Logo} />
                    </View>
                </ImageBackground>
            </Container>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(37,56,81,1)',
        flex: 1
    },
    logoContainer: {
        paddingBottom: 73,
        justifyContent: 'flex-end',
        alignItems: "center",
        flex: 1,
    },
    logo: {
        height: 142,
        width: 140,
    }
});