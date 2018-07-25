'use strict';

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import {
    Container,
    View,
    Picker,
    Icon
}
    from 'native-base';

export default class CustomPicker extends Component {

    render() {
        const { mode, placeholder, } = this.props;
        return (
            <Picker mode='dropdown'
                iosIcon={<Icon name='ios-arrow-down-outline' />}

                placeholder={placeholder}
                placeholderStyle={{ color: "#fff" }}
                placeholderIconColor="#fff"
                style={styles.picker}
            >
                <Picker.Item label={placeholder} value="key-1" style={styles.item}/>
                <Picker.Item label="Wallet" value="key0" style={styles.item}/>
                <Picker.Item label="ATM Card" value="key1" style={styles.item}/>
                <Picker.Item label="Debit Card" value="key2" style={styles.item}/>
                <Picker.Item label="Credit Card" value="key3" style={styles.item}/>
                <Picker.Item label="Net Banking" value="key4" style={styles.item}/>
            </Picker>
        );
    }
};

const styles = StyleSheet.create({
    picker: {
        color: '#fff',
        paddingLeft: 0,
    },
    item: {
        color: '#fff'
    }
});