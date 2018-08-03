import React from 'react';
import {Container, Content, View, Text} from 'native-base';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import Header from '../components/Header';
import ActionBar from '../components/ActionBar';
import TabbedHeading from '../components/TabbedHeading';
import Footer from '../components/Footer';
import SetsGroup from '../components/SetsGroup';
import Modal from '../components/Modal';
import BPM from "../components/BPM";
import Hr from "../components/Hr/Hr";
import LBS from "../components/LBS";
import List from '../components/CustomList';

import Methods from '../utils/Methods';

// import ModalHeader from "../components/Modal/ModalComponents/ModalHeader/ModalHeader";

export default class Cardio extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isEditModalOpened: false,
            tabs:[
                {value: 'Preview',active: true},
                {value: 'Parameters'},
                {value: 'Max HR'}
            ],
            selectedTab: ''
        }
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
    }
    openEditModal = () => {
        this.setState({isEditModalOpened: true})
    }
    closeEditModal = () => {
        this.setState({isEditModalOpened: false})
    }


    _renderPreview = () => (
        <Content>
            <View style={styles.previewImageContainer}>
                <Image style={styles.previewImage} source={require('../../assets/cardioPreview.png')}></Image>
                <List type={'table'}/>
            </View>
        </Content>
    )

    renderParameters = () => (
        <Content>
            <TabbedHeading title={'Heart Rate Tracker: Active'} toggle />
            <SetsGroup
                title={'Repetitions'}
                onEdit={this.openEditModal}
                onAddSet={()=>console.log('Add')}
                header/>
            <SetsGroup
                title={'Distance'}
                onEdit={this.openEditModal}
                onAddSet={()=>console.log('Add')}
                header/>
        </Content>
    )

    renderMaxHR = () => (
        <Content>
            <TabbedHeading title={'Heart Rate Tracker: Active'}>
                <Image source={require('../../assets/heartbeat100.png')}
                       style={styles.heartImage}
                ></Image>
            </TabbedHeading>
            <SetsGroup title={'History Resting HR'} onEdit={this.openEditModal} onAddSet={()=>console.log('Add')} header/>
            <BPM title={'Resting Hr (bpm)'}/>
        </Content>
    )

    render() {
        return (
            <View style={styles.container}>

                <Modal isVisible={this.state.isEditModalOpened} onClose={this.closeEditModal} heading={'Reps'}/>
                <Header title='Cardio'/>
                <ActionBar tabs={this.state.tabs} selectTab={this.selectTab}/>
                {
                    this.state.selectedTab === 'Preview'?
                        this._renderPreview() :
                        this.state.selectedTab === 'Parameters'?
                            this.renderParameters() :
                        this.state.selectedTab === 'Max HR'?
                            this.renderMaxHR(): null
                }
                <Footer type={'button'}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ECF5FD',
        flex: 1
    },
    heartImage: {
        height:20,
        width:20,
        marginRight: 5
    },
    hr: {
        width:'100%',
        borderWidth:0.5,
        backgroundColor:'#fff',
        paddingTop:35
    },
    previewImageContainer: {
        marginTop: 7
    },
    previewImage: {
        width: '100%'
    }
});