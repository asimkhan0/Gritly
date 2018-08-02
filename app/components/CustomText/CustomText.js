import React from 'react';
import { Text } from 'native-base';
import styles from './styles';
import PropTypes from 'prop-types';

export default CustomText = (props) => {

    return(
        <Text
            style={[
                    props.regular? styles.textRegular :
                        props.medium? styles.textMedium:
                            props.bold? styles.textBold: null,
                    props.style
                ]}>
            {props.children}
            </Text>
    );
}

CustomText.propTypes = {
    regular:  PropTypes.bool,
    medium:   PropTypes.bool,
    bold:     PropTypes.bool,
    style:    Text.propTypes.style,
    children: PropTypes.string.isRequired,
}