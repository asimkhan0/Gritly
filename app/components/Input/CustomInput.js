import React from 'react';
import { View, Input } from 'native-base';
import Text from '../CustomText';
import styles from './styles';
import PropTypes from 'prop-types';

export default CustomInput = (props) => {
    return(
        <Input
            style={styles.input}
            placeholder={props.placeholder}
        />
);
}

CustomInput.propTypes = {
    placeholder: PropTypes.string,
    style: Input.propTypes.style,
}