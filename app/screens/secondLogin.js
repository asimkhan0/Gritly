'use strict';

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LogoSvg from '../../assets/logoSvg.svg';
import {
    Container,
    View,
    Text,
    Button,
}
    from 'native-base';
import { ImageBackground, Dimensions,TouchableOpacity } from 'react-native';
import * as Actions from '../actions';

import Image from 'react-native-remote-svg';
const {height} = Dimensions.get('window');

export default class Login extends Component {

    static navigationOptions = {
        header: null
    };
    render() {
        return (
                <Container style={[styles.container]}>
                    <ImageBackground source={require('../../assets/background.png')} style={{flex:1, height: null, width: null }} >
                        <View style={styles.content}>
                            <View style={styles.logoContainer}>
                                <Image style={styles.logo} source={require('../../assets/logo.png')} />
                            </View>
                            <View style={styles.actionButtonsCont}>
                                <Button block primary style={styles.continueAs}>
                                    <Text>Continue as Carol Anderson</Text>
                                </Button>
                                <TouchableOpacity onPress={() => this.props.navigation.pop()}>
                                    <Text style={styles.switchAccount}>Switch Account</Text>
                                </TouchableOpacity>
                            </View>
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
    content:{
        paddingHorizontal: 38,
        flex: 1
    },
    logoContainer: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        height: (height /2) -1,
        width:140,
        marginLeft:'auto',
        marginRight:'auto'

    },
    logo:{
        height:142,
        width:140,
    },
    actionButtonsCont: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: (height /2) -1
    },
    continueAs: {
        backgroundColor: 'rgba(24,196,193,1)',
        borderRadius: 4,

    },
    switchAccount: {
        paddingTop: 24,
        color: '#fff',
        textAlign: 'center'
    }
});

// function mapStateToProps(state, props) {
//     return {  }
// }

// function mapDispatchToProps(dispatch) {
//   return {  }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Login);

// export default Login;