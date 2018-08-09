import React from 'react';
import { View, Textarea } from 'native-base';
import Text from '../CustomText';
import styles from './styles';
import PropTypes from 'prop-types';

export default CustomInput = (props) => {
    return(
        <Textarea
            rowSpan={props.rowSpan}
            style={styles.input}
            placeholder={props.placeholder}
        />
);
}

CustomInput.propTypes = {
    placeholder: PropTypes.string,
    style: Textarea.propTypes.style,
    rowSpan: PropTypes.number
}
CustomInput.defaultProps = {
    rowSpan: 5
}