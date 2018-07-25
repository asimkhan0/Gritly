'use strict';

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LogoSvg from '../../assets/logo.svg';
import CustomText from '../components/CustomText'
import {
    Container,
    View,
    Text,
} from 'native-base';
import { ImageBackground, Dimensions, Image } from 'react-native';
import * as Actions from '../actions';
import OrganizationBox from "../components/OrganizationBox";

import { Fonts } from '../utils/Fonts';

// import Image from 'react-native-remote-svg';
// const {height, width} = Dimensions.get('window');

export default class SelectOrganization extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fontLoaded: true
        };
    }

    // async componentDidMount() {
    //     await Expo.Font.loadAsync({
    //         'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    //         // 'montserrat': require('../../assets/fonts/Montserrat/Montserrat-Thin.ttf'),
    //     });
    //     this.setState({ fontLoaded: true });
    // }

    // { paddingTop: Expo.Constants.statusBarHeight }

    render() {
        return (
            this.state.fontLoaded ?
                <Container style={[styles.container]}>
                    <ImageBackground source={require('../../assets/background.png')} style={{flex:1, height: null, width: null }} >
                        <View style={styles.content}>
                            <View style={styles.logoContainer}>
                                <Image style={styles.logo}  source={require('../../assets/logo.png')} />
                            </View>
                            <View style={styles.loginToCont}>
                                <CustomText medium style={styles.loginToText}> Login to </CustomText>
                            </View>
                            <View style={styles.actionButtonsCont}>
                                <OrganizationBox />
                                <OrganizationBox />
                                {/*<OrganizationBox />*/}
                                {/*<OrganizationBox />*/}

                            </View>
                        </View>
                    </ImageBackground>
                </Container> :
                <Text>Loading ....</Text>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(37,56,81,1)',
        // flex: 1
    },
    content:{
        paddingHorizontal: 38,
        // flex: 1
    },
    logoContainer: {
        // flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        // height: (height / 3),
        marginBottom: 68,
        marginTop: 63,
        width:140,
        marginLeft:'auto',
        marginRight:'auto'

    },
    logo:{
        height:142,
        width:140,
    },
    actionButtonsCont: {
        // flex: 1,
        flexDirection: 'row',
        // alignItems: '',
        justifyContent: 'space-around',
        // height: (height /2) -1,
        flexWrap: 'wrap',
    },
    loginToCont:{
        alignSelf: 'center',
        marginBottom: 24
    },
    loginToText:{
        color:'#fff',
        fontSize: 30
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