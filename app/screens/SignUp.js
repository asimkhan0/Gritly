'use strict';

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LogoSvg from '../../assets/logo.png';
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

export default class SignUp extends Component {
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
    static navigationOptions = {
        header: null
    };
  render() {
    return (

        <Container style={[styles.container]}>
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
        backgroundColor: '#253851',
        flex: 1,
      },
    content: {
        flex: 1,
        paddingHorizontal: 38,
    },
    logoContainer: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 33,
        marginBottom: 56,
    },
    loginForm:{
        flex: 1
    },
    loginButtonContainer: {
        flex:1,
        marginTop: 40, //TODO: flex-end 
        marginBottom: 36,
        alignItems:"flex-end",
        justifyContent: "center"
    },


    loginButton: {
        backgroundColor: 'rgba(24,196,193,1)',
        marginTop: 28,
        borderRadius: 4,

      },
      itemsContainer: {
        marginLeft: 0,
        // margimnTop: 15
        height: 50
      },
      input: {
        color: '#fff'
      },
      label: {
        color: 'rgba(255,255,255,1)'
      },

      lastItem: {
        borderEndWidth: 0,

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
        borderBottomWidth: 0.5,
        paddingBottom: 0,
        marginBottom: 0,
        height: 50
      
      },
      leftSeparator: {
        marginRight: 11
      }
});