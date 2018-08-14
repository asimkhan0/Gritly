import React from 'react';
import { StyleSheet } from 'react-native';
import {Content, Container,Button } from 'native-base';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Text from '../components/CustomText';

export default class SelectCategory extends React.Component {

    constructor(props) {
        super(props);

    }

    render(){
        return (
            <Container style={styles.container}>
                <Header title='SELECT CATEGORY' />
                <Content>
                    <Button full transparent style={styles.button}>
                    <Text medium style={styles.text}>+Activity Group</Text>
                    </Button>
                    <Button full transparent style={styles.button}>
                    <Text medium style={styles.text} >+Circuit Group/ Superset</Text>
                    </Button>
                    <Button full transparent style={styles.button}>
                    <Text medium style={styles.text}>+Rest Break</Text>
                    </Button>

                </Content>
                <Footer type={'action'}/>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ECF5FD',
        flex: 1
    },
    text: {
        color: '#253851',
        fontSize:14,
        textAlign:'left',
    },
    button: {
        backgroundColor:'#fff',
        borderRadius: 4,
        marginTop: 7,
        justifyContent:'flex-start',
        height: 55
    }
});