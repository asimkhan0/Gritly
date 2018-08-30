import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {View, Button, Container, Content} from 'native-base';
import Text from '../components/CustomText';
import Header from "../components/Header";
import Footer from "../components/Footer";
import ActionBar from "../components/ActionBar";
import Methods from "../utils/Methods";
import TabbedHeading from "../components/TabbedHeading/TabbedHeading";
import SetsGroup from "../components/SetsGroup/SetsGroup";
import NumberRow from '../components/NumberRow'
import PushupsAddRow from '../components/PushupsAddRow';

export default class Todo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isEditModalOpened: false,
            tabs:[
                {value: 'Todo',active: true},
                {value: 'History'},
                {value: 'Feedback'}
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

    render(){

        return (
            <Container style={styles.container}>
                <Header title='Pushups'  {...this.props} icon={'back'}/>
                <Content>
                    <ActionBar tabs={this.state.tabs} selectTab={this.selectTab}/>

                    <TabbedHeading title={'Rest 30 sec between sets'} toggle />
                    <SetsGroup
                        title={'Repetitions'}
                        onEdit={this.openEditModal}
                        onAddSet={()=>console.log('Add')}
                        />
                    <View style={styles.numberRows}>
                        <NumberRow title={'Reps'}/>
                        <NumberRow title={'Lbs'}/>
                    </View>
                    <PushupsAddRow />
                </Content>
                <Footer type={'button'} {...this.props}/>
            </Container>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#ECF5FD'
    },
    numberRows: {
        backgroundColor: '#fff'
    }

});