'use strict';

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
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
import * as Actions from '../actions';
import CustomPicker from '../components/Picker';

export default class SignUpOld extends Component {
  // constructor(props) {
  //   super(props);
  //
  //   this.state = {
  //     fontLoaded: false
  //   };
  // }
  //
  // async componentDidMount() {
  //   await Expo.Font.loadAsync({
  //     'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
  //   });
  //   this.setState({ fontLoaded: true });
  // }

  render() {
    return (
        <Container style={[styles.container, { paddingTop: Expo.Constants.statusBarHeight }]}>
          <ImageBackground source={require('../../assets/background.png')} style={{ flex: 1, height: null, width: null }} >
            <Content style={styles.content}>
              <View style={styles.logoContainer}>
                  <Image style={styles.logo} source={LogoSvg} />
              </View>
              <Form style={styles.loginForm}>
                <Item floatingLabel style={styles.itemsContainer}>
                  <Label style={styles.label}>Full name</Label>
                  <Input style={styles.input} />
                </Item>
                <Item floatingLabel style={[styles.itemsContainer]} >
                  <Label style={styles.label}>Phone Number</Label>
                  <Input style={styles.input} />
                </Item>
                <Item floatingLabel style={[styles.itemsContainer]} >
                  <Label style={styles.label}>Address</Label>
                  <Input style={styles.input} />
                </Item>
                <View style={styles.pickersContainer}>
                  <View style={[styles.itemsContainer,styles.country,styles.leftSeparator]} >
                    <CustomPicker placeholder='Country' />
                  </View>
                  <View style={[styles.itemsContainer,styles.country]} >
                    <CustomPicker placeholder='State' />
                  </View>
                </View>
                <Item style={[styles.itemsContainer, styles.lastItem]} >
                  <CustomPicker placeholder='Type' />
                </Item>
              </Form>

              <View style={styles.loginButtonContainer}>
                <Button block primary style={styles.loginButton}>
                  <Text>Sign Up</Text>
                </Button>
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
    // justifyContent: 'space-around'
  },
  content: {
    paddingHorizontal: 38,
  },
  loginForm: {
    flex: 1
  },
  loginButton: {
    backgroundColor: 'rgba(24,196,193,1)',
    marginTop: 28,
    borderRadius: 4

  },
  loginButtonContainer: {
    marginTop: 40, //TODO: flex-end 
    marginBottom: 36
  },
  itemsContainer: {
    marginLeft: 0,
    // marginTop: 15
    height: 50
  },
  input: {
    color: '#fff'
  },
  label: {
    color: 'rgba(255,255,255,1)'
  },
  logoContainer: {
    marginTop: 33,
    marginBottom: 56,
    justifyContent: 'center',
    alignItems: "center",
  },
  logo: {
    height: 81,
    width: 80,
  },
  lastItem: {
    borderEndWidth: 0
  },
  pickersContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  country: {
    flex: 1,
    justifyContent: 'space-between',
    marginTop: 19,
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
    paddingBottom: 0,
    marginBottom: 0,
    height: 50
  
  },
  leftSeparator: {
    marginRight: 11
  }
});