import React from 'react';
import styles from './styles';
import { Dimensions, TouchableOpacity} from 'react-native';
import Text from '../../CustomText';

const HEIGHT = Dimensions.get('window').height;

export default ProgramTypes = (props) => {
    return(
        <TouchableOpacity style={[styles.container,{minHeight: HEIGHT/5 }]}
                          onPress={() => props.onPress()}
        >
            {props.children}
            <Text medium style={styles.typeTitle}>{props.title}</Text>
        </TouchableOpacity>
    )
}