import React from 'react';
import { StyleSheet } from 'react-native';
import {Content, Container, View } from 'native-base';
import Header from "../components/Header";
import Footer from "../components/Footer";
import TabbedHeading from "../components/TabbedHeading";
import Text from '../components/CustomText'
import AttachedImages from "../components/AttachedImages";
import Input from '../components/Input';
import TextArea from '../components/TextArea';

export default class Attach extends React.Component {

    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        title:"ATTACH"
    };

    render(){
        return (
            <Container style={styles.container}>
                {/*<Header*/}
                    {/*title='All Videos'*/}
                {/*/>*/}
                <Content>
                    <View style={styles.sharedWithContainer}>
                            <Text medium style={styles.sharedWith} >Shared With: </Text>
                            <Text medium style={styles.sharedWithStatus} >Public</Text>
                    </View>
                    <AttachedImages />
                    <View style={styles.nameTextContainer}>
                        <Input placeholder='Enter Name'/>
                    </View>
                    <View style={styles.nameTextContainer}>
                        <TextArea rowSpan={5} placeholder='Enter Description'/>
                    </View>
                </Content>
                <Footer type={'button'} title={'Done'} onPress={()=>this.props.navigation.navigate('attach')}/>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ECF5FD',
        flex: 1
    },
    sharedWithContainer: {
        flex: 1,
        flexDirection:'row',
        paddingHorizontal: 14,
        marginTop: 8,
        backgroundColor: '#fff',
        borderBottomWidth:1,
        borderBottomColor: '#707070',
        paddingVertical: 8
    },
    sharedWith: {
        color: '#000',
        fontSize: 12,
    },
    sharedWithStatus: {
        color: '#8DABC4',
        fontSize: 12,
    },
    nameTextContainer: {
        marginTop:5,
    },
});