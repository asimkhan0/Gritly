import React from 'react';
import Text from '../../CustomText/index'
import { View } from "native-base";
import { Image, TouchableOpacity} from "react-native";
import styles from './styles';


export default SearchResult = props => {

    return (
        <TouchableOpacity style={styles.container}
                          onPress={props.onPress}>
            <View style={styles.imageContainer}>
                {props.children}
            </View>
            <Text medium style={styles.title}>{props.title.toUpperCase()}</Text>
        </TouchableOpacity>
    );
}

