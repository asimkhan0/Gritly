import React from 'react';
import {Image, StyleSheet, TouchableOpacity } from 'react-native';
import {View, Container, Content,} from 'native-base';
import Text from '../components/CustomText';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Input from '../components/Input';
import Slider from 'react-native-slider';
import HumanBody from '../components/HumanBody';
import List from '../components/CustomList';

export default class PainPoint extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render(){

        return (
            <Container style={styles.container}>
                <Header title='Pain Point'  {...this.props} icon={'back'}/>
                <Content>
                    <HumanBody />
                    <View style={styles.row}>
                        <Text medium style={styles.leftText}>Body Region</Text>
                        <Text medium style={styles.rightText}>Right Shoulder</Text>
                    </View>
                    <View style={styles.row}>
                        <Text medium style={styles.leftText}>Pain Intensity</Text>
                        <View style={styles.sliderContainer}>
                            <Slider
                                value={this.state.value}
                                onValueChange={(value) => this.setState({value})}
                                style={{width: 150}}
                                thumbTintColor={'#fff'}
                                thumbStyle={styles.thumbStyle}
                                trackStyle={styles.trackStyle}
                                minimumTrackTintColor={'#007AFF'}
                                maximumTrackTintColor={'#c7c7cc'}
                                value={0.5}
                            />
                        </View>
                    </View>
                    <Text medium style={styles.commetsCountText}>2 Comments</Text>
                    <List type={'comments'} />
                    <Input placeholder='Add comments'/>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({

        container: {
            backgroundColor: '#ECF5FD'
        },

        row: {
            flexDirection: 'row',
            backgroundColor: '#fff',
            paddingVertical: 15,
        },
        leftText: {
            fontSize: 12,
            color: '#253851',
            flex:1,
            marginLeft: 13
        },
        rightText: {
            fontSize: 12,
            color: '#8DABC4',
            flex: 1,
            marginLeft: 13
        },
        sliderContainer: {
            flex: 1,
            marginRight: 13,
            marginLeft: 13,
            alignItems: 'stretch',
            justifyContent: 'center',
        },
        thumbStyle: {
            shadowOpacity: 0.3,
            shadowRadius: 3,
            shadowOffset: {
                height: 0,
                width: 0
            },
            elevation: 2
        },
        trackStyle: {
        },
        commetsCountText: {
            color: '#253851',
            fontSize: 12,
            backgroundColor: '#fff',
            padding: 13,
            marginTop: 2
        }
    }
);