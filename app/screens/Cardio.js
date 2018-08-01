import React from 'react';
import {Container, Content, View, Text} from 'native-base';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import ActionBar from '../components/ActionBar';
import RestToggle from '../components/RestToggle';
import Footer from '../components/Footer';
import SetsGroup from '../components/SetsGroup';
import Modal from '../components/Modal';
// import ModalHeader from "../components/Modal/ModalComponents/ModalHeader/ModalHeader";

export default class Cardio extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isEditModalOpened: false
        }
        this.tabs = [{value: 'Preview', active: true}, {value: 'Parameters'}];


    }
    openEditModal = () => {
        this.setState({isEditModalOpened: true})
    }
    closeEditModal = () => {
        this.setState({isEditModalOpened: false})
    }
    render() {

        return (
            <View style={styles.container}>

                <Modal isVisible={this.state.isEditModalOpened} onClose={this.closeEditModal} heading={'Reps'}/>
                <Header title='Cardio'/>
                <ActionBar tabs={this.tabs}/>
                <Content>
                    <RestToggle />
                    <SetsGroup setTitle={'Repetitions'} onEdit={this.openEditModal} onAddSet={()=>console.log('Add')} header/>
                    <SetsGroup setTitle={'Distance'} onAddSet={()=>console.log('Add')} header/>
                </Content>
                <Footer type={'button'}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ECF5FD',
        flex: 1
    }
});

/*
<Modal isVisible={this.state.isEditModalOpened}
                       backdropColor={'#000'}
                       backdropOpacity={0.7}
                       style={{width: '100%',marginLeft:0}}
                >
                    <View style={{  backgroundColor:'#fff' }}>
                        <Text>Hello!</Text>
                        <TouchableOpacity onPress={this.closeEditModal}>
                            <Text>Hide me!</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
 */