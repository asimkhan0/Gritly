import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Container, Content} from 'native-base';
import Header from "../components/Header";
import Footer from "../components/Footer";
import ActionBar from "../components/ActionBar";
import Methods from "../utils/Methods";
import GraphChart from '../components/GraphChart';
import List from '../components/CustomList';
import HumanBody from '../components/HumanBody';

export default class PainPoints extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isEditModalOpened: false,
            tabs:[
                {value: 'Pain Intensity',active: true},
                {value: 'Body Chart'},
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


    _renderPainIntensity(){
        return(
            <View>
                <GraphChart/>
                <View style={styles.listContainer}>
                    <List type={'table'}/>
                </View>
            </View>
        )
    }
    _renderBodyChart() {
        return(
            <View>
                <HumanBody />
                <List type='table'/>
            </View>
        )
    }

    render(){

        return (
            <Container style={styles.container}>
                <Header title='Pain Points'  {...this.props} />
                <Content>
                    <ActionBar tabs={this.state.tabs} selectTab={this.selectTab}/>
                    {
                        this.state.selectedTab === 'Pain Intensity'?
                            this._renderPainIntensity() :
                            this.state.selectedTab === 'Body Chart'?
                                this._renderBodyChart(): null}
                </Content>
                <Footer type={'action'} {...this.props}/>
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