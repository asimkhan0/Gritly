import React from 'react';
import { Input } from 'native-base';
import styles from './styles';
import PropTypes from 'prop-types';

export default CustomInput = (props) => {
    return(
        <Input
            style={[styles.input,props.style]}
            placeholder={props.placeholder}
            onSubmitEditing={props.onSubmitEditing}
        />
);
}

CustomInput.propTypes = {
    placeholder: PropTypes.string,
    style: Input.propTypes.style,
};