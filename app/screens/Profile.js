import {Content, View} from 'native-base';
import {Image, StyleSheet } from 'react-native';
import ActionBar from '../components/ActionBar';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Methods from '../utils/Methods';
import Modal from '../components/Modal';
import React from 'react';
import Text from '../components/CustomText';
import Posts from "../components/Posts/Posts";


export default class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isEditModalOpened: false,
            tabs:[
                {value: 'Newest',active: true},
                {value: 'Team'},
                {value: 'Organization'},
            ],
            selectedTab: ''
        }
    }
    componentDidMount() {
        if(this.state.selectedTab === ''){
            const selectedTab = Methods.findSelectedTab(this.state.tabs);
            this.setState({selectedTab: selectedTab.value});
        }
    }
    componentWillReceiveProps(nextProps) {
        if(this.state.selectedTab === ''){
            const selectedTab = Methods.findSelectedTab(this.state.tabs);
            this.setState({selectedTab: selectedTab.value});
        }
    }

    selectTab = (selectedTab) => {
        const updatedTabs = Methods.selectTab(this.state.tabs, selectedTab);
        this.setState({tabs: updatedTabs, selectedTab:selectedTab});
    };
    openEditModal = () => {
        this.setState({isEditModalOpened: true});
        //TODO: later on have to check if this modal is being used here.
    };
    closeEditModal = () => {
        this.setState({isEditModalOpened: false})
    };


    renderPreview = () => (
        <Content>
            <View>
            <View style={styles.previewImageContainer}>
                <Image style={styles.previewImage} source={require('../../assets/cover.png')}
                       height={150}
                       width={'100%'}
                />
            </View>
            <View style={styles.overlay} >
                <View style={styles.dpContainer}>
                    <Image style={[styles.previewImage,{borderRadius: 100}]} source={require('../../assets/dp.png')}
                           width={76}
                           height={76}
                    />
                </View>
            </View>
            <View style={styles.profileInfoContainer}>
                <Text medium style={styles.profileName}>Ted Mosby</Text>
                <Text medium style={styles.position}>Dermatologist at Apolo Physician, California</Text>
                <Text medium style={styles.summery}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas euismod mauris nulla, in elementum eros scelerisque eu. Sed quis mollis mi, ac volutpat lacus. Phasellus et ultrices nunc. Sed diam neque, rhoncus non enim sit amet, ornare vulputate nibh. Aliquam id dictum neque. Donec porta sem eu sem dapibus malesuada.</Text>
            </View>
        </View>
            <Posts />
        </Content>
    )

    render() {
        return (
            <View style={styles.container}>

                <Modal isVisible={this.state.isEditModalOpened}
                       onClose={this.closeEditModal}
                       heading={'Reps'}/>

                <Header title='Profile' {...this.props}/>
                <ActionBar tabs={this.state.tabs} selectTab={this.selectTab} filterIcon/>
                {
                    this.state.selectedTab === 'Newest'?
                        this.renderPreview() :
                        this.state.selectedTab === 'Team'?
                            this.renderPreview() :
                            this.state.selectedTab === 'Organization'?
                                this.renderPreview() : null
                }
                <Footer type={'action'} {...this.props}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ECF5FD',
        flex: 1,
        width: null,
        height: null,
    },
    hr: {
        width:'100%',
        borderWidth:0.5,
        backgroundColor:'#fff',
        paddingTop:35
    },
    previewImageContainer: {
        marginTop: 7,
    },
    overlay:{
        ...StyleSheet.absoluteFillObject,
        alignItems:'center',
        zIndex:1,
        paddingTop:120
    },
    previewImage: {
        width: '100%',
    },
    dpContainer: {},
    profileInfoContainer:{
        backgroundColor: '#fff',
        paddingLeft: 15,
        paddingRight:120,
        paddingTop: 30,
        paddingBottom: 10,
        marginTop: 10,
        marginBottom: 23
    },
    profileName: {
        color: '#253851',
        fontSize: 12,
    },
    position: {
        color: '#8DABC4',
        fontSize: 11,
        marginTop: 10
    },
    summery: {
        color: '#8DABC4',
        fontSize: 11,
        marginTop: 10
    },

});