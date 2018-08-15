import React from 'react';
import {Container, Content} from 'native-base';
import Header from '../components/Header';
import CustomList from '../components/CustomList';
import Footer from '../components/Footer';

export default class Client extends React.Component {

    render() {

        return (
            <Container >
                <Header
                    title='Rachel Viccaji'
                    subTitle='2h ago'
                    icon='back'/>
                <Content>
                    <CustomList
                        type={'messageView'}
                    />
                </Content>
                <Footer type={'input'}/>
            </Container>
        );
    }
}