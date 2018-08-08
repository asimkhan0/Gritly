import React from 'react';
import { ActionFooter, InputFooter, ButtonFooter } from './FooterTypes';
import PropTypes from 'prop-types';

export default Footer = (props) =>  {

    const { type = 'action' } = props;

    return(
        type === 'action' ? <ActionFooter /> :
        type === 'input' ? <InputFooter /> :
        type === 'button' ? <ButtonFooter title={props.title}/> : null
    )

}

Footer.propTypes = {
    type: PropTypes.string,
    title: PropTypes.string
}

Footer.defaultProps = {
    type: 'action',
    title: 'Submit'
}