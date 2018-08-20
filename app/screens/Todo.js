import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {View, Button, Container, Content} from 'native-base';
import Text from '../components/CustomText';
import Modal from 'react-native-modalbox';
import LinearGradient from 'react-native-linear-gradient';
import Header from "../components/Header";
import Footer from "../components/Footer";
import ActionBar from '../components/ActionBar';
import Methods from "../utils/Methods";

export default class Todo extends React.Component {

    constructor() {
        super();
        this.state = {
            isOpen: false,
            isDisabled: false,
            swipeToClose: false,
            sliderValue: 0.3
        };
    }

    onClose = () => {
        this.setState({isOpen: false})
        this.refs.modal1.close()
    }

    onOpen = () => {
        this.setState({isOpen: true})
        this.refs.modal1.open()
    }

    onClosingState(state) {
        console.log('the open/close of the swipeToClose just changed');
    }

    render(){

        return (
            <Container style={styles.container}>
                <Modal
                    coverScreen={true}
                    style={[styles.modal]}
                    ref={"modal1"}
                    swipeToClose={false}
                    onClosed={this.onClose}
                    onOpened={this.onOpen}
                    onClosingState={this.onClosingState}>
                    {/*<LinearGradient colors={['#76EDE5', '#16ABAC']} style={styles.linearGradient}>*/}
                    <ModalContent onClose={this.onClose}/>
                </Modal>
                <Header title='Todo'  />
                <Content>
                    <ActionBar tabs={this.state.tabs} selectTab={this.selectTab} />
                </Content>
                <Footer type={'action'} onAdd={this.onOpen} {...this.props}/>
            </Container>
        )
    }
}

function ModalContent (props) {
    return (
        <LinearGradient
            colors={['rgba(118, 237, 229, 0.9)', 'rgba(22, 171, 172, 0.9)']}
            style={styles.linearGradient}>

            <View style={styles.row}>
                <TouchableOpacity style={styles.option}>
                    <Image source={require('../../assets/programIcon.png')} />
                    <Text medium style={styles.optionsText}>Program</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.option}>
                    <Image source={require('../../assets/painPointIcon.png')} />
                    <Text medium style={styles.optionsText}>Pain Point</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.option}>
                    <Image source={require('../../assets/trackerIcon.png')} />
                    <Text medium style={styles.optionsText}>Tracker</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={props.onClose} style={styles.row}>
                <Image source={require('../../assets/closeIcon.png')} />
            </TouchableOpacity>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({

    wrapper: {
        paddingTop: 50,
        flex: 1
    },

    modal: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.1)'
    },

    btn: {
        margin: 10,
        backgroundColor: "#3B5998",
        // color: "white",
        padding: 10
    },

    btnModal: {
        position: "absolute",
        top: 0,
        right: 0,
        width: 50,
        height: 50,
        backgroundColor: "transparent"
    },
    linearGradient:{
        flex: 1,
        width: '100%',
        justifyContent:'flex-end'
    },
    text: {
        color: "black",
        fontSize: 22
    },
    row: {
        justifyContent:'space-around',
        flexDirection:'row',
        paddingTop:40,
        paddingBottom:10,
    },
    option: {
        alignItems:'center'
    },
    optionsText: {
        color: "#fff",
        fontSize: 14
    }

});