import React from 'react';
import { Text,Button } from 'native-base';
import styles from './styles';

export default CustomText = (props) => {

    return(
        <Text
            style={[
                    props.regular? styles.textRegular :
                        props.medium? styles.textMedium:
                            props.bold? styles.textBold: null,
                    props.style
                ]}
            onPress={() => props.click ? props.click(props.children): null}
        >
            {props.children}
            </Text>
    );
}