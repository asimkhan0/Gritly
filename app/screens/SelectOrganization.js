'use strict';

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CustomText from '../components/CustomText'
import {
    Container,
    View,
    Text,
} from 'native-base';
import { ImageBackground, Image } from 'react-native';
import * as Actions from '../actions';
import OrganizationBox from "../components/OrganizationBox";


export default class SelectOrganization extends Component {
    static navigationOptions = {
        header: null
    };
    constructor(props) {
        super(props);

        this.state = {
            fontLoaded: true
        };
    }

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
                                <OrganizationBox onPress={() => this.props.navigation.navigate('dashboard')}/>
                                <OrganizationBox onPress={() => this.props.navigation.navigate('dashboard')}/>

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
    },
    content:{
        paddingHorizontal: 38,
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
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
        flexDirection: 'row',
        justifyContent: 'space-around',
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