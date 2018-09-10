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
  Text,
  Button,
  Form,
  Input,
  Item,
  Label,
}
  from 'native-base';
import { Image, ImageBackground } from 'react-native';
import * as Actions from '../actions'; //Import your actions

export default class Login extends Component {

    static navigationOptions = {
        header: null
    };

  navigateTo = (key) => {
    this.props.navigation.navigate(key);
  }
  render() {
    return (
        <Container style={[styles.container]}>
        <ImageBackground source={require('../../assets/background.png')} style={{flex:1, height: null, width: null }} >
          <Content style={styles.content}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={LogoSvg} />
            </View>
            <Form style={styles.loginForm}>
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
                      onPress={() => this.navigateTo('selectOrganization')}>
                <Text>Sign In</Text>
              </Button>
            </View>
            <View style={styles.otherOptions}>
               <Text style={styles.forgotPassword}>Forgot Password ?</Text>
              <TouchableOpacity onPress={() => this.navigateTo('signup')}>
                  <Text style={styles.signup}>Sign Up </Text>
              </TouchableOpacity>
            </View>
              <TouchableOpacity onPress={() => this.navigateTo('secondLogin')}>
                  <Text style={styles.signup}>Second Login Test Button</Text>
              </TouchableOpacity>
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
    marginHorizontal: 38,
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
    paddingTop: 63,
    paddingBottom: 89,
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
    justifyContent:'space-between'
  },
  forgotPassword: {
    color:'rgba(139,148,162,1)'
  },
  signup: {
    color:'rgba(139,148,162,1)'
  },
  lastItem: {
    borderEndWidth: 0
  },
});

// function mapStateToProps(state, props) {
//     return {  }
// }

// function mapDispatchToProps(dispatch) {
//   return {  }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Login);

// export default Login;