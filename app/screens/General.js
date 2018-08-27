import {Content, Left, View} from 'native-base';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import ActionBar from '../components/ActionBar';
import Description from "../components/Description/Description";
import Footer from '../components/Footer';
import Header from '../components/Header';
import List from '../components/CustomList';
import Methods from '../utils/Methods';
import Modal from '../components/Modal';
import React from 'react';
import Text from '../components/CustomText';


export default class General extends React.Component {

    static navigationOptions = {
        title:"General"
    };

    constructor(props) {
        super(props);
        this.state = {
            isEditModalOpened: false,
            tabs:[
                {value: 'Preview',active: true},
                {value: 'Customize Video'},
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
    }
    openEditModal = () => {
        this.setState({isEditModalOpened: true});
        //TODO: later on have to check if this modal is being used here.
    }
    closeEditModal = () => {
        this.setState({isEditModalOpened: false})
    }


    renderPreview = () => (
        <Content>
            <View style={styles.previewImageContainer}>
                <Image style={styles.previewImage} source={require('../../assets/cardioPreview.png')}></Image>
                <List type={'table'}/>
            </View>
        </Content>
    )

    renderCustomizeVideo = () => (
        <Content>
            <View style={styles.previewImageContainer}>
                <Image style={styles.previewImage} source={require('../../assets/cardioPreview.png')}></Image>
            </View>
                <Description />
                <TouchableOpacity style={styles.EditMediaRow}
                                  onPress={()=>this.props.navigation.navigate('allVideos')}>
                        <Image
                            source={require('../../assets/camera.png')}
                            style={styles.cameraIcon}
                        />
                    <Text medium style={styles.editMediaText}>Edit Media</Text>
                </TouchableOpacity>
        </Content>
    )

    render() {
        return (
            <View style={styles.container}>

                <Modal isVisible={this.state.isEditModalOpened}
                       onClose={this.closeEditModal}
                       heading={'Reps'}/>

                {/*<Header title='General'/>*/}
                <ActionBar tabs={this.state.tabs} selectTab={this.selectTab} />
                {
                    this.state.selectedTab === 'Preview'?
                        this.renderPreview() :
                        this.state.selectedTab === 'Customize Video'?
                            this.renderCustomizeVideo() : null
                }
                <Footer type={'button'}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ECF5FD',
        flex: 1
    },
    heartImage: {
        height:20,
        width:20,
        marginRight: 5
    },
    hr: {
        width:'100%',
        borderWidth:0.5,
        backgroundColor:'#fff',
        paddingTop:35
    },
    previewImageContainer: {
        marginTop: 7
    },
    previewImage: {
        width: '100%'
    },
    EditMediaRow: {
        backgroundColor: '#fff',
        marginTop:10,
        justifyContent:'flex-start',
        alignItems:'center',
        paddingVertical:8,
        paddingHorizontal: 20,
        flexDirection:'row',
        //ios shadow
        shadowOpacity: 0.3,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0
        },
        //android
        // shadow
        elevation: 2,
        marginBottom:2
    },
    cameraIcon: {
        width: 23,
        height:20
    },
    editMediaText: {
        fontSize:12,
        color:'#253851',
        marginHorizontal: 7
    }
});