import React from 'react';
import { StyleSheet } from 'react-native';
import {View, Container, Content} from 'native-base';
import Footer from "../components/Footer";
import Header from '../components/Header';
import Methods from "../utils/Methods";
import ActionBar from '../components/ActionBar';
import SearchResults from "../components/SearchResults";

export default class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isEditModalOpened: false,
            tabs:[
                {value: 'All',active: true},
                {value: 'Clients'},
                {value: 'Organizations'},
                {value: 'Trackers'}
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
    render() {
        return (
          <Container style={styles.container}>
              <Header title={`Search Results (${6})`} icon='back' rightIcon='filter'/>
              <Content>
                  <ActionBar tabs={this.state.tabs} selectTab={this.selectTab}/>
                  <View style={styles.searchResultsContainer}>
                      <SearchResults />
                  </View>
              </Content>
              <Footer type={'action'} {...this.props}/>
          </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ECF5FD'
    },
    searchResultsContainer: {

    }
});