import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {View, Container, Content} from 'native-base';
import Text from '../components/CustomText';
import Modal from 'react-native-modalbox';
import LinearGradient from 'react-native-linear-gradient';
import Header from "../components/Header";
import Footer from "../components/Footer";
import ActionBar from '../components/ActionBar';
import Methods from "../utils/Methods";
import CalendarStripe from "../components/CalendarStripe/CalendarStripe";
import Todos from "../components/Todos/Todos";

export default class Todo extends React.Component {

    static navigationOptions = {
        header: null
    };

    constructor() {
        super();
        this.state = {
            isOpen: false,
            isDisabled: false,
            swipeToClose: false,
            sliderValue: 0.3,


            tabs:[
                {value: 'WHAT TO DO',active: true},
                {value: 'COMPLETED'},
            ],
            selectedTab: ''
        };
    }

    componentDidMount() {
        if(this.state.selectedTab === ''){
            const selectedTab = Methods.findSelectedTab(this.state.tabs);
            this.setState({selectedTab: selectedTab.value});
        }
    }
    componentWillReceiveProps(nextProps) {
        if(this.state.selectedTab === ''){
            const selectedTab = Methods.findSelectedTab(this.state.tabs);
            this.setState({selectedTab: selectedTab.value});
        }
    }

    selectTab = (selectedTab) => {
        const updatedTabs = Methods.selectTab(this.state.tabs, selectedTab);
        this.setState({tabs: updatedTabs, selectedTab:selectedTab});
    };
    onClose = () => {
        this.setState({isOpen: false});
        this.refs.modal1.close();
    };

    onOpen = () => {
        this.setState({isOpen: true});
        this.refs.modal1.open();
    };

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
                    <ModalContent onClose={this.onClose} {...this.props}/>
                </Modal>
                <Header title='Todo' {...this.props}/>
                <Content>
                    <CalendarStripe/>
                    <ActionBar
                        tabs={this.state.tabs}
                        selectTab={this.selectTab}
                        style={styles.actionBar}
                    />
                    <Todos {...this.props}/>
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
                <TouchableOpacity style={styles.option} onPress={() => props.navigation.navigate('programs')}>
                    <Image source={require('../../assets/programIcon.png')} />
                    <Text medium style={styles.optionsText}>Program</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.option} onPress={() => props.navigation.navigate('painPoints')}>
                    <Image source={require('../../assets/painPointIcon.png')} />
                    <Text medium style={styles.optionsText}>Pain Point</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.option} onPress={() => props.navigation.navigate('trackers')}>
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

    container: {
        backgroundColor: '#ECF5FD'
    },

    actionBar: {
        backgroundColor: '#ECF5FD'
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
    },

});