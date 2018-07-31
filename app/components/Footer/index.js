import React from 'react';
import { ActionFooter, InputFooter, ButtonFooter } from './FooterTypes';

export default Footer = (props) =>  {

    const { type = 'action' } = props;

    return(
        type === 'action' ? <ActionFooter /> :
        type === 'input' ? <InputFooter /> :
        type === 'button' ? <ButtonFooter /> : null
    )

}