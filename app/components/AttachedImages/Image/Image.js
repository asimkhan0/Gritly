import React from 'react';
import { View,Text } from 'native-base';
import { Image, Dimensions } from 'react-native';
import styles from './styles.js';

const WIDTH = Dimensions.get('window').width;

export default class AttachedImage extends React.Component {

    render() {

        return (
            <View style={styles.container}>
                <View style={[styles.imageContainer,{}]}>
                    <Image
                        style={styles.image}
                        source={require('../../../../assets/SharedImage.png')} />
                </View>
                <View style={styles.overlay} >
                    <Image source={require('../../../../assets/crosscircle.png')} />
                </View>
            </View>
        )
    }
}