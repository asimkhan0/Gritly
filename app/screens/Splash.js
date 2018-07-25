'use strict';

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LogoSvg from '../../assets/logo.svg';

import {
  Container,
  View
}
  from 'native-base';
import { Image, ImageBackground } from 'react-native';
import * as Actions from '../actions';

export default class SignUp extends Component {

  render() {
    return (
      <Container style={[styles.container, { paddingTop: Expo.Constants.statusBarHeight }]}>
        <ImageBackground source={require('../../assets/splashbg.png')} style={{ flex: 1, height: null, width: null }} >
          <View style={styles.logoContainer}>
              <Image style={styles.logo} source={LogoSvg} />
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