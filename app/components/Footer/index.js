import React from 'react';
import { ActionFooter, InputFooter } from './FooterTypes';

export default Footer = (props) =>  {

    const { type = 'action' } = props;

    return(
        type === 'action' ? <ActionFooter /> :
        type === 'input' ? <InputFooter /> : null
    )

}