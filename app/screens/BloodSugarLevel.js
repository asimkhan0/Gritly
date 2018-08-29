import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {View, Button, Container, Content} from 'native-base';
import Text from '../components/CustomText';
import Header from "../components/Header";
import Footer from "../components/Footer";
import ActionBar from '../components/ActionBar';
import Methods from "../utils/Methods";
import Question from "../components/Question/Question";

export default class Todo extends React.Component {

    constructor() {
        super();
        this.state = {
            isOpen: false,
            isDisabled: false,
            swipeToClose: false,
            sliderValue: 0.3,


            tabs:[
                {value: 'Todo',active: true},
                {value: 'Instructions'},
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
    }

    render(){

        return (
            <Container style={styles.container}>
                <Header title='Blood Sugar Level'  />
                <Content>
                    <ActionBar tabs={this.state.tabs} selectTab={this.selectTab}/>

                    <Question
                        question={'Sugar Level before Breakfast in (mg/dl) ?'}
                        answerType={'text'}
                    />
                    <Question
                        question={'Do you have difficulty doing any of your daily activities?'}
                        answerType={'radio'}
                        radioOptions={['Yes','No']}
                    />
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


});