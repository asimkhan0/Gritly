import React from 'react';
import {View} from 'native-base';
import {TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import Text from '../CustomText';

export default PushupsAddRow = () => {
    return(
        <View style={styles.pushupsAddRow}>
            <View style={styles.left}>
                <Text medium style={styles.addText}>Add</Text>
            </View>
            <View style={styles.right}>

                <TouchableOpacity>
                    <Image source={require('../../../assets/galleryAddPushup.png')}
                        style={styles.image}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../../../assets/MediaAddPushup.png')}
                        style={styles.image}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../../../assets/smilyAddPushup.png')}
                        style={styles.image}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}