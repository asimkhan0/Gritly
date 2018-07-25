import React from 'react';
import {Container, Content} from 'native-base';
import CustomHeader from '../components/Header';
import ActionBar from '../components/ActionBar';
import CustomList from '../components/CustomList';
import Footer from '../components/Footer';

export default class Client extends React.Component {

    render() {

        return (
            <Container >
                <CustomHeader />
                <ActionBar />
                <Content>
                    <CustomList />
                </Content>
                <Footer />
            </Container>
        );
    }
}