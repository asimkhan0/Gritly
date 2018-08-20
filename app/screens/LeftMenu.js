import React from 'react';
import {Container,Header,Content, View} from "native-base";
import { StyleSheet, Image } from "react-native";
import Text from '../components/CustomText';
import LinearGradient from 'react-native-linear-gradient';
import DrawerOptions from '../components/DrawerOptions';

export default class LeftMenu extends React.Component {
    constructor(props){
        super(props);
    }
    render() {

        return (
            <Container style={styles.container}>
                <Header style={styles.header}>
                    <LinearGradient
                        colors={['rgba(118, 237, 229, 0.9)', 'rgba(22, 171, 172, 0.9)']}
                        style={styles.linearGradient}>
                        <Text bold style={styles.headingText}>WEST SIDE PHYSIOTHERAPY</Text>
                        <Image source={require('../../assets/down.png')}></Image>
                    </LinearGradient>
                </Header>
                <Content>
                    <View style={styles.profileHeaderContainer}>
                        <View>
                            <Image
                                style={styles.image}
                                source={require('../../assets/profilePic.png')} />
                        </View>
                        <View>
                            <Text bold style={styles.name}>Alan Cosby</Text>
                            <Text medium style={styles.city}>North California</Text>
                        </View>
                    </View>
                    <View style={styles.drawerOptions}>
                        <DrawerOptions {...this.props}></DrawerOptions>
                    </View>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#253851'
    },
    header: {
        height: 60,
        paddingLeft:0,
        paddingRight: 0,
    },
    linearGradient:{
        flex: 1,
        width: '100%',
        margin: 0,
        paddingLeft:18,
        alignItems: 'center',
        flexDirection: 'row'
    },

    headingText: {
        color: '#fff',
        fontSize: 16
    },
    profileHeaderContainer: {
        flexDirection: 'row',
        alignItems:'center',
        paddingHorizontal: 18,
        paddingTop:17,
        paddingBottom:27,
        borderBottomColor: '#3B4C63',
        borderBottomWidth: 1

    },
    image: {
        borderWidth:1,
        borderRadius:100,
        borderColor: '#09A79B',
        marginRight:11,
        width:50,
        height:50
    },
    name: {
        fontSize: 15,
        color: '#fff'
    },
    city: {
        fontSize: 10,
        color: '#8DABC4'
    },
    drawerOptions: {

    }
})