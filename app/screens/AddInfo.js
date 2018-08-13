import React from 'react';
import { StyleSheet } from 'react-native';
import {Content, Container, View } from 'native-base';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Input from '../components/Input';
import TextArea from '../components/TextArea';

export default class Dashboard extends React.Component {

    constructor(props) {
        super(props);

    }

    render(){
        return (
            <Container style={styles.container}>
                <Header
                    title='ADD INFO'
                />
                <Content>
                    <View style={styles.textContainer}>
                        <Input placeholder='Enter description of exercise'/>
                    </View>
                    <View style={styles.textContainer}>
                        <TextArea placeholder='Enter description of exercise:'/>
                    </View>
                </Content>
                <Footer type={'button'} title={'Next'}/>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ECF5FD',
        flex: 1
    },
    textContainer: {
        marginTop:5
    }
});