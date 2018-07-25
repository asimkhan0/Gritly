'use strict';

import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';

import {
    Container,
    View,
    Text,

} from 'native-base';
import CustomText from "./CustomText/CustomText";

export default class OrganizationBox extends Component {


    render() {
        return (
            <View style={styles.boxContainer}>
                <View style={styles.imgContainer}>
                    <Image style={styles.img}  source={require('../../assets/organizationdemo.png')} />
                </View>
                <View style={styles.companyNameCont}>
                    {/*<Text style={styles.companyNameText}>*/}
                        {/*Aisle Fitness Society*/}
                    {/*</Text>*/}
                    <CustomText style={styles.companyNameText} medium> Aisle Fitness Society </CustomText>
                </View>
                <View style={styles.statusCont}>
                    <Text style={styles.statusText}>
                        Pending
                    </Text>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    boxContainer: {
        height: 120,
        width: 140,
        backgroundColor: '#fff',
        borderRadius: 4,
        marginBottom: 10
    },
    imgContainer: {
        alignItems:'center',
        marginTop: 14
    },
    img:{
      height: 50,
      width: 50
    },
    companyNameCont: {
        marginTop: 5,
        alignItems: 'center',
    },
    companyNameText: {
        fontSize: 12,
        // fontWeight: '500', //medium
        color: '#253851',
        alignSelf:'center'
    },
    statusCont: {
        alignItems: 'center',
    },
    statusText: {
        fontSize: 10,
        fontWeight: '500', //medium
        color:'#8DABC4'
    }
});