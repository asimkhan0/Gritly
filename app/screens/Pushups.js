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
import GraphChart from '../components/GraphChart';
import List from '../components/CustomList';

export default class Todo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isEditModalOpened: false,
            tabs:[
                {value: 'Todo'},
                {value: 'History',active: true},
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

    _renderTodo() {
        return(
            <View>
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
            </View>
        )
    }

    _renderHistory(){
        return(
            <View>
                <GraphChart/>
                <View style={styles.listContainer}>
                    <List type={'table'}/>
                </View>
            </View>
        )
    }

    _renderFeedback(){

    }

    render(){

        return (
            <Container style={styles.container}>
                <Header title='Pushups'  {...this.props} icon={'back'}/>
                <Content>
                    <ActionBar tabs={this.state.tabs} selectTab={this.selectTab}/>
                    {this.state.selectedTab === 'Todo'?
                        this._renderTodo() :
                        this.state.selectedTab === 'History'?
                            this._renderHistory() :
                            this.state.selectedTab === 'Feedback'?
                                this._renderTodo(): null}
                </Content>
                {this.state.selectedTab === 'Todo'?
                    <Footer type={'button'} {...this.props}/>: null}
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
    },
    listContainer: {
        marginTop: 4
    }

});