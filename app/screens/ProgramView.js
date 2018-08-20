import React from 'react';
import { StyleSheet } from 'react-native';
import {Content, Container,Button, View } from 'native-base';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Text from '../components/CustomText';

import CalendarStripe from "../components/CalendarStripe/CalendarStripe";
import ActivityGroup from "../components/ActivityGroup";

export default class ProgramView extends React.Component {

    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        title:"PROGRAMS"
    };

    render(){

        return (
            <Container style={styles.container}>
                {/*<Header title='PROGRAMS'  />*/}
                <Content>
                    <CalendarStripe />
                    <View style={styles.box}>
                        <Text medium style={styles.headingText}>Shoulder Injury Stability</Text>
                        <Text medium style={styles.otherText}>
                            By George Griff | 2 weeks ago
                        </Text>
                    </View>
                    <View style={styles.activitiesContainer}>
                        <ActivityGroup title={'Activity Group 1'}/>
                    </View>
                    <View style={styles.activitiesContainer}>
                        <ActivityGroup title={'Activity Group 2'}/>
                    </View>
                </Content>
                <Footer type={'action'} {...this.props}/>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ECF5FD',
        flex: 1
    },
    box: {
        backgroundColor:'#fff',
        paddingHorizontal: 17,
        paddingVertical:22,
        //ios shadow
        shadowOpacity: 0.3,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0
        },
        //android shadow
        elevation: 2,
        marginBottom:2,
    },
    headingText: {
        fontSize: 16,
        color: '#253851'
    },
    otherText: {
        fontSize: 12,
        color: '#8DABC4'
    },
    activitiesContainer: {
        marginBottom: 10
    }
});