import React from 'react';
import {Container, Content} from 'native-base';
import Header from '../components/Header';
import ActionBar from '../components/ActionBar';
import CustomList from '../components/CustomList';
import Footer from '../components/Footer';

export default class Client extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            isEditModalOpened: false,
            tabs:[
                {value: 'Active',active: true},
                {value: 'Inactive'},
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
            <Container >
                <Header title='Client' {...this.props}/>
                <ActionBar tabs={this.state.tabs} selectTab={this.selectTab} filterIcon/>
                <Content>
                    <CustomList
                        type={'user'}
                    />
                </Content>
                <Footer type={'action'} {...this.props}/>
            </Container>
        );
    }
}