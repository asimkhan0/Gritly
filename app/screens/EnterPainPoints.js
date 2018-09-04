import React from 'react';
import {Image, StyleSheet, TouchableOpacity } from 'react-native';
import {View, Container, Content,} from 'native-base';
import Text from '../components/CustomText';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Input from '../components/Input';
import Slider from 'react-native-slider';

export default class EnterPainPoints extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render(){

        return (
            <Container style={styles.container}>
                <Header title='Enter Pain Points'  {...this.props} icon={'back'}/>
                <Content>
                    <Text medium style={styles.tapImageMessage}>Tap image to create marker</Text>
                    <View style={styles.humanPicContainer}>
                        <Image source={require('../../assets/humanFront.png')}
                               style={styles.humanPic}
                        />
                    </View>
                    <View style={styles.bodyTabsContainer}>
                        <TouchableOpacity>
                            <Text semiBold style={[styles.tabText,styles.selectedTab]}>Left</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text semiBold style={[styles.tabText]}>Front</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text semiBold style={[styles.tabText]}>Right</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text semiBold style={[styles.tabText]}>Back</Text>
                        </TouchableOpacity>

                    </View>
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
                    <Input placeholder='Add comments'/>
                </Content>
                <Footer type={'button'} {...this.props}/>
            </Container>
        )
    }
}

const styles = StyleSheet.create({

        container: {
            backgroundColor: '#ECF5FD'
        },
        tapImageMessage: {
            fontSize: 12,
            color: '#fff',
            backgroundColor:'#8DABC4',
            textAlign: 'center',
            paddingVertical: 5
        },
        humanPicContainer: {
            backgroundColor: '#000',
            alignItems:'center'
        },
        humanPic: {
            height: 512,
            width: 372
        },
        bodyTabsContainer: {
            flexDirection: 'row',
            justifyContent: 'center',
            backgroundColor: '#000',
            marginBottom: 3
        },
        tabText: {
            color: '#fff',
            fontSize:14,
            paddingHorizontal:10,
            paddingVertical: 5
        },
        selectedTab: {
            borderBottomColor: '#fff',
            borderBottomWidth: 6,
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
            // backgroundColor: '#007AFF'
        }
    }
);