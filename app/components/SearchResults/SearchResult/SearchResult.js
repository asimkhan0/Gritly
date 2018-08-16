import React from 'react';
import Text from '../../CustomText/index'
import { View } from "native-base";
import { Image, TouchableOpacity} from "react-native";
import styles from './styles';


export default SearchResult = props => {

    return (
        <TouchableOpacity style={styles.container}>
            <View>
                <Image
                    style={styles.image}
                    source={require('../../../../assets/userAvatar.png')} />
            </View>
            <View>
                <Text medium style={styles.name}>Alan Cosby</Text>
                <Text medium style={styles.city}>North California</Text>
            </View>
        </TouchableOpacity>
    );
}

