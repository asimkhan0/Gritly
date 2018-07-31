import React from 'react';
import {Container, Content} from 'native-base';
import Header from '../components/Header';
import ActionBar from '../components/ActionBar';
import CustomList from '../components/CustomList';
import Footer from '../components/Footer';

export default class Client extends React.Component {

    constructor(props) {
        super(props);

        this.tabs = [{value: 'Active', active: true}, {value: 'Inactive'}]
    }
    render() {

        return (
            <Container >
                <Header title='Client'/>
                <ActionBar tabs={this.tabs} filterIcon/>
                <Content>
                    <CustomList
                        type={'user'}
                    />
                </Content>
                <Footer />
            </Container>
        );
    }
}