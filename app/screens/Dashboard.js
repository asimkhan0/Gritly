import React from 'react';
import { StyleSheet } from 'react-native';
import {Content, Container, View } from 'native-base';
import Header from "../components/Header";
import Footer from "../components/Footer";
import UserStats from "../components/UserStats";
import ProfessionalMetrics from "../components/ProfessionalMetrics";
import PhysicalStats from "../components/PhysicalStats";
import Activities from '../components/Activities';
import PainRegions from '../components/PainRegions';


export default class Dashboard extends React.Component {

    constructor(props) {
        super(props);

    }

    render(){
        return (
            <Container style={styles.container}>
                <Header title='Dashboard' {...this.props}/>
                <Content>
                    <View style={styles.userStatsContainer}>
                        <UserStats />
                    </View>
                    <View style={styles.group}>
                    <View style={styles.professionalMetricsContainer}>
                        <ProfessionalMetrics/>
                    </View>
                    <View style={styles.physicalStatsContainer}>
                        <PhysicalStats />
                    </View>
                    </View>
                    <View style={styles.activitiesContainer}>
                            <Activities barsColor={'#26C1C9'}
                                        header={'MOST COMPLETED ACTIVITIES'}/>
                            <Activities barsColor={'#FE7B20'}
                                        header={'LEAST  COMPLETED ACTIVITIES'}/>
                    </View>

                    <View style={styles.painRegionsContainer}>
                        <PainRegions header={'TOP RATED PAIN REGIONS'}/>
                    </View>

                </Content>
                <Footer type={'action'} {...this.props}/>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F2F8FD',
        flex: 1
    },
    userStatsContainer: {},
    professionalMetricsContainer: {

    },
    physicalStatsContainer: {},
    activitiesContainer: {
        paddingVertical: 10,
        marginTop:5,
        paddingHorizontal:14,
        backgroundColor:'#fff',
        //ios shadow
        shadowOpacity: 0.3,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0
        },
        //android shadow
        elevation: 2,
    },

    painRegionsContainer: {
        paddingVertical: 10,
        marginTop:5,
        paddingHorizontal:14,
        backgroundColor:'#fff',
        //ios shadow
        shadowOpacity: 0.3,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0
        },
        //android shadow
        elevation: 2,
        marginBottom: 2
    },
    group: {
        shadowOpacity: 0.3,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0
        },
        elevation: 2,
        marginTop:5,
        backgroundColor: '#fff'
    }
});