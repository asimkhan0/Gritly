import React from 'react';
import { StyleSheet } from 'react-native';
import {Content, Container} from 'native-base';
import Header from "../components/Header";
import Footer from "../components/Footer";
import List from '../components/CustomList';

export default class UserGroups extends React.Component {

    constructor(props) {
        super(props);

    }

    render(){

        return (
            <Container style={styles.container}>
                <Header title='USER GROUPS' {...this.props} />
                <Content>
                    <List type='user_groups'/>
                </Content>
                <Footer type={'action'} {...this.props}/>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1
    },
});