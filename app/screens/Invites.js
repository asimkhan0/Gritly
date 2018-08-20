import React from 'react';
import { StyleSheet } from 'react-native';
import {Content, Container} from 'native-base';
import Header from "../components/Header";
import Footer from "../components/Footer";
import List from '../components/CustomList';
import ActionBar from '../components/ActionBar';
import Methods from "../utils/Methods";

export default class Invites extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tabs:[
                {value: 'Organization',active: true},
                {value: 'Group'},
                {value: 'Team'},
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
                <Header title='Invites' {...this.props} />
                <Content>
                    <ActionBar tabs={this.state.tabs} selectTab={this.selectTab} />
                    <List type='invites'/>
                </Content>
                <Footer type={'action'} {...this.props}/>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1
    },
});