import React from 'react';
import {FlatList, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import Text from '../../CustomText'
import {Button, View, Icon} from "native-base";

export default class PostFooter extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.left}>
                    <Image source={require('../../../../assets/commentIcon.png')}
                        style={styles.commentIcon}
                    />
                    <Text medium style={styles.text}>Comment</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.right}>
                    <Text medium style={styles.text}>{`View All ${23} Comments`}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}