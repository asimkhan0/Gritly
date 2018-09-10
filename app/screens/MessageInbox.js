import React from 'react';
import {Container, Content} from 'native-base';
import Header from '../components/Header';
import CustomList from '../components/CustomList';
import Footer from '../components/Footer';

export default class Client extends React.Component {

    static navigationOptions = {
        header: null
    };
    render() {

        return (
            <Container >
                <Header title='Messages' {...this.props}/>
                <Content>
                    <CustomList
                        type={'message'}
                        {...this.props}
                    />
                </Content>
                <Footer type={'action'} {...this.props}/>
            </Container>
        );
    }
}