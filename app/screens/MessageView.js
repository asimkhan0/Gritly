import React from 'react';
import {Container, Content} from 'native-base';
import CustomList from '../components/CustomList';
import Footer from '../components/Footer';

export default class MessageView extends React.Component {

    static navigationOptions = {
        title:"Andy C."
    };

    render() {

        return (
            <Container >
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