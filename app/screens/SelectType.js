import React from 'react';
import { StyleSheet } from 'react-native';
import {Content, Container } from 'native-base';
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProgramTypes from '../components/ProgramTypes';

export default class Dashboard extends React.Component {

    constructor(props) {
        super(props);

    }

    render(){
        return (
            <Container style={styles.container}>
                <Header
                    title='SELECT TYPE'
                />
                <Content>
                    <ProgramTypes />
                </Content>
                <Footer type={'action'}/>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ECF5FD',
        flex: 1
    }
});