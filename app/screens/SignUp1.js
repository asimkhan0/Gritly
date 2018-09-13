'use strict';

import React, { Component } from 'react';
import { StyleSheet,TouchableOpacity } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LogoSvg from '../../assets/logoSvg.svg';

import {
    Container,
    Content,
    View,
    Button,
    Form,
    Input,
    Item,
    Label,
}
    from 'native-base';
import { Image, ImageBackground } from 'react-native';
import * as Actions from '../actions'; //Import your actions
import Text from '../components/CustomText';
export default class SignUp1 extends Component {

    static navigationOptions = {
        header: null
    };

    constructor(props){
        super(props);
        this.state = {
            userType: ''
        }
    }
    navigateTo = (key) => {
        this.props.navigation.navigate(key);
    }
    selectUserType = (type) => {
        this.setState({userType: type});
    }
    render() {
        return (
            <Container style={[styles.container]}>
                <ImageBackground source={require('../../assets/background.png')} style={{flex:1, height: null, width: null }} >
                    <Content style={styles.content}>
                        <View style={styles.logoContainer}>
                            <Image style={styles.logo} source={require('../../assets/logo.png')} />
                        </View>


                        <Form style={styles.loginForm}>
                            <View style={styles.typeButtonsContainer}>
                                <TouchableOpacity transparent
                                                  style={[styles.typeButton,this.state.userType === 'As Professional'?styles.activeType:{}]}
                                                  onPress={() => this.selectUserType('As Professional')}
                                >
                                    <Text medium style={styles.typeText}>As Professional</Text>
                                </TouchableOpacity>
                                <TouchableOpacity transparent
                                                  style={[styles.typeButton,this.state.userType === 'As Client'?styles.activeType:{}]}
                                                  onPress={() => this.selectUserType('As Client')}
                                >
                                    <Text medium style={styles.typeText}>As Client</Text>
                                </TouchableOpacity>
                            </View>
                            <Item floatingLabel style={styles.itemsContainer}>
                                <Label style={styles.label}>Email</Label>
                                <Input style={styles.input}  />
                            </Item>
                            <Item floatingLabel style={[styles.itemsContainer,styles.lastItem]} >
                                <Label style={styles.label}>Password</Label>
                                <Input style={styles.input} />
                            </Item>
                        </Form>

                        <View style={styles.loginButtonContainer}>
                            <Button block primary style={styles.loginButton}
                                    onPress={() => this.navigateTo('signup')}>
                                <Text>Sign Up</Text>
                            </Button>
                        </View>
                        <View style={styles.otherOptions}>
                            <Text style={styles.forgotPassword}>Already have an account ? </Text>
                            <TouchableOpacity onPress={() => this.props.navigation.pop()}>
                                <Text style={styles.signin}>Sign In</Text>
                            </TouchableOpacity>
                        </View>
                    </Content>
                </ImageBackground>
            </Container>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(37,56,81,1)',
        flex: 1,
        justifyContent: 'space-around'
    },
    content:{
        marginHorizontal: 28,
    },
    loginForm: {
        flex:1
    },
    loginButton: {
        backgroundColor: 'rgba(24,196,193,1)',
        marginTop: 28,
        borderRadius: 4

    },
    loginButtonContainer: {
        paddingTop: 20,
    },
    itemsContainer: {
        marginLeft: 0,
        marginTop: 15
    },
    input: {
        color: '#fff'
    },
    label: {
        color: 'rgba(139,148,162,1)'
    },
    logoContainer: {
        paddingTop: 50,
        paddingBottom: 65,
        justifyContent: 'center',
        alignItems: "center",
    },
    logo: {
        height: 142,
        width: 140,
    },
    otherOptions: {
        paddingTop:28,
        flex:1,
        flexDirection: 'row',
    },
    forgotPassword: {
        color:'rgba(139,148,162,1)'
    },
    signin: {
        color:'rgba(139,148,162,1)'
    },
    lastItem: {
        borderEndWidth: 0
    },
    typeButtonsContainer: {
        flexDirection:'row',
        justifyContent:'center',

    },
    typeButton: {
        minWidth: 110,
        borderColor: '#fff',
        borderWidth: 3,
        paddingVertical:10,
        paddingHorizontal:10,
        borderRadius:4,
        marginRight:20
    },
    typeText: {
        color: '#fff',
        fontSize:15,
        textAlign:'center'
    },
    activeType: {
        backgroundColor: '#18C4C1'
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