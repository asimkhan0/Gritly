import React from 'react';
import styles from './styles';
// import Text from '../CustomText'
import {Button, View, Text} from "native-base";
import { ScrollView } from 'react-native';
import {ModalHeader,EditReps} from './ModalComponents';
import Modal from "react-native-modal";
import Set from "../Set";
import SetsGroup from "../SetsGroup";
import NumberRow from "../NumberRow";

export default class CustomModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Modal isVisible={this.props.isVisible}
                   backdropColor={'#000'}
                   backdropOpacity={0.7}
                   style={{width: '100%',marginLeft:0}}
            >
                <View style={{  backgroundColor:'#fff' }}>
                    <ModalHeader heading={this.props.heading} onClose={this.props.onClose}/>
                    <SetsGroup />
                    <NumberRow title={'Reps'}/>
                    <NumberRow title={'Lbs'}/>
                </View>
            </Modal>
        );
    }
}