import React from 'react';
import { View, Text } from 'native-base';
import styles from './styles';
import Image from './Image'

export default class AttachedImages extends React.Component {

    render() {
        return (
            <View style={styles.AttachmentContainer}>
                <Image/>
                <Image/>
                <Image/>
                <Image/>
            </View>
        )
    }
}