import React from 'react';
import { StyleSheet,TouchableOpacity } from 'react-native';
import {Content, Container,Button, View } from 'native-base';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Text from '../components/CustomText';

import CalendarStripe from "../components/CalendarStripe/CalendarStripe";
import ActivityGroup from "../components/ActivityGroup";

export default class Programs extends React.Component {

    constructor(props) {
        super(props);

    }
    static navigationOptions = {
        header: null,
    };

    navigateToView = () => {
        this.props.navigation.navigate('programView')
    }
    render(){

        return (
            <Container style={styles.container}>
                <Header title='PROGRAMS'  {...this.props}/>
                <Content>
                    <CalendarStripe />
                    <TouchableOpacity style={styles.box} onPress={this.navigateToView}>
                        <Text medium style={styles.boxHeadingText}>Shoulder Injury Stability</Text>
                        <Text medium style={styles.otherText}>
                            By George Griff | 2 weeks ago
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.box} onPress={this.navigateToView}>
                        <Text medium style={styles.boxHeadingText}>Shoulder Injury Stability</Text>
                        <Text medium style={styles.otherText}>
                            By George Griff | 2 weeks ago
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.box} onPress={this.navigateToView}>
                        <Text medium style={styles.boxHeadingText}>Shoulder Injury Stability</Text>
                        <Text medium style={styles.otherText}>
                            By George Griff | 2 weeks ago
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.box,styles.addTextContainer]}
                        onPress={() => this.props.navigation.push('selectCategory')}
                    >
                        <Text medium style={styles.addText}>Add</Text>
                    </TouchableOpacity>
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
        paddingVertical:11,
        //ios shadow
        shadowOpacity: 0.3,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0
        },
        //android shadow
        elevation: 2,
        marginBottom:3,
    },
    boxHeadingText: {
        fontSize: 16,
        color: '#253851'
    },
    otherText: {
        fontSize: 12,
        color: '#8DABC4'
    },
    addText:{
        fontSize: 16,
        color: '#253851',
        textDecorationLine: 'underline',
    },
    addTextContainer: {
        marginTop:10
    }
});