import React from 'react';
import { ActionFooter, InputFooter, ButtonFooter } from './FooterTypes';
import PropTypes from 'prop-types';

export default Footer = (props) =>  {

    const { type } = props;

    return(
        type === 'action' ? <ActionFooter {...props} /> :
        type === 'input' ? <InputFooter {...props}/> :
        type === 'button' ? <ButtonFooter {...props} /> : null
    )

}

Footer.propTypes = {
    type: PropTypes.string,
    title: PropTypes.string,
    onAdd: PropTypes.func
}

Footer.defaultProps = {
    type: 'action',
    title: 'Submit'
}