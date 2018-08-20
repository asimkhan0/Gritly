import React from 'react';
import {Container, Content} from 'native-base';
import Header from '../components/Header';
import CustomList from '../components/CustomList';
import Footer from '../components/Footer';

export default class Client extends React.Component {

    render() {

        return (
            <Container >
                <Header title='Messages' {...this.props}/>
                <Content>
                    <CustomList
                        type={'message'}
                    />
                </Content>
                <Footer type={'action'} {...this.props}/>
            </Container>
        );
    }
}