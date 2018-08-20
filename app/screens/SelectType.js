import React from 'react';
import { StyleSheet } from 'react-native';
import {Content, Container } from 'native-base';
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProgramTypes from '../components/ProgramTypes';

export default class SelectType extends React.Component {

    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        title:"SELECT TYPE"
    };

    navigateTo = (key) => {
        this.props.navigation.navigate(key);
    }

    render(){
        return (
            <Container style={styles.container}>
                {/*<Header*/}
                    {/*title='SELECT TYPE'*/}
                {/*/>*/}
                <Content>
                    <ProgramTypes onPress={this.navigateTo}/>
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
    }
});