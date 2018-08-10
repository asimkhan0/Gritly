import React from 'react';
import { StyleSheet } from 'react-native';
import {Content, Container, View } from 'native-base';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Text from '../components/CustomText'
import Input from '../components/Input';
import UserStats from "../components/UserStats";
import ProfessionalMetrics from "../components/ProfessionalMetrics";
import PhysicalStats from "../components/PhysicalStats";

export default class Dashboard extends React.Component {

    constructor(props) {
        super(props);

    }

    render(){
        return (
            <Container style={styles.container}>
                <Header
                    title='Dashboard'
                />
                <Content>
                    <View style={styles.userStatsContainer}>
                        <UserStats />
                    </View>
                    <View style={styles.professionalMetricsContainer}>
                        <ProfessionalMetrics/>
                    </View>
                    <View style={styles.physicalStatsContainer}>
                        <PhysicalStats />
                    </View>

                    <View style={styles.activitiesContainer}>

                    </View>
                    <View style={styles.painRegionsContainer}>

                    </View>

                </Content>
                <Footer type={'action'}/>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1
    },
    userStatsContainer: {},
    professionalMetricsContainer: {
        marginTop:5
    },
    physicalStatsContainer: {},
    activitiesContainer: {},
    painRegionsContainer: {}
});