import React from 'react';
import {FlatList, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import Text from '../../CustomText'
import {Button, View, Icon} from "native-base";


export default class PostHeader extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.left}>
                    <Image source={require('../../../../assets/postpic30.png')} />
                    <View style={styles.headingTextContainer}>
                        <View style={styles.headingNameContainer}>
                            <View>
                                <Text medium style={styles.nameText}>Ted Mosby</Text>
                            </View>
                            <View>
                                <Text medium style={styles.positionText}> - Head Personal Trainer</Text>
                            </View>
                        </View>
                        <Text medium style={styles.dateText}>March 05</Text>
                    </View>
                </View>
                <View style={styles.right}>
                    <Button transparent style={styles.editButtonContainer}>
                        <Image source={require('../../../../assets/edit.png')}
                            // width={5}
                            // height={20}
                               style={styles.editButton}
                        />
                    </Button>
                </View>
            </View>
        );
    }
}