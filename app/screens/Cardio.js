import React from 'react';
import {Container, Content, Switch} from 'native-base';
import { StyleSheet } from 'react-native';
import Header from '../components/Header';
import ActionBar from '../components/ActionBar';
import RestToggle from '../components/RestToggle';
import Footer from '../components/Footer';
import SetsGroup from '../components/SetsGroup'
export default class Client extends React.Component {

    constructor(props) {
        super(props);

        this.tabs = [{value: 'Preview', active: true}, {value: 'Parameters'}]
    }
    render() {

        return (
            <Container style={styles.container}>
                <Header title='Cardio'/>
                <ActionBar tabs={this.tabs}/>
                <Content>
                    <RestToggle />
                    <SetsGroup setTitle={'Repetitions'}/>
                    <SetsGroup setTitle={'Distance'}/>
                </Content>
                <Footer type={'button'}/>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
   container: {
       backgroundColor: '#ECF5FD'
   }
});