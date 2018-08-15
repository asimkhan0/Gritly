import React from 'react';
import { StyleSheet } from 'react-native';
import {Content, Container, View} from 'native-base';
import Header from "../components/Header";
import Footer from "../components/Footer";
import ActionBar from '../components/ActionBar';
import Methods from "../utils/Methods";
import Text from '../components/CustomText';

export default class Settings extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tabs:[
                {value: 'Account',active: true},
                {value: 'Privacy'},
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
                <Header title='Settings'  />
                <Content>
                    <ActionBar tabs={this.state.tabs} selectTab={this.selectTab} />
                    <View style={styles.box}>
                        <View style={styles.row}>
                            <Text medium style={styles.leftText}>Email</Text>
                            <Text medium style={styles.rightText}>testname@email.com</Text>
                        </View>
                        <View style={styles.row}>
                            <Text medium style={styles.leftText}>Phone Number</Text>
                            <Text medium style={styles.rightText}>(773) 450 9908</Text>
                        </View>
                        <View style={styles.row}>
                            <Text medium style={styles.leftText}>Notifications</Text>
                        </View>
                    </View>
                </Content>
                <Footer type={'action'}/>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ECF5FD',
        flex: 1,
    },
    box:{
        marginVertical:4,
    },
    row:{
        backgroundColor:'#fff',
        flexDirection:'row',
        justifyContent: 'space-between',
        paddingVertical:12,
        //ios shadow
        shadowOpacity: 0.3,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0
        },
        //android shadow
        elevation: 2,
        marginTop:2
    },
    rightText:{
        color: '#8DABC4',
        fontSize: 14,
        paddingHorizontal:13,
    },
    leftText:{
        color: '#253851',
        fontSize: 14,
        paddingHorizontal:13,
    }
});