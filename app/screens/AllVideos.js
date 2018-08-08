import React from 'react';
import { PermissionsAndroid, StyleSheet, Platform, Alert, CameraRoll} from 'react-native';
import { Content, Container} from 'native-base';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Gallery from '../components/Gallery';

export default class AllVideos extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            media: [],
            selectedIndexes: [],
            multipleSelectMode: false
        }
        this.getStoragePermissions = getStoragePermissions.bind(this);
    }
    async componentDidMount() {
        this.getStoragePermissions();
        this.getMedia();
    }

    getMedia = () => {
        CameraRoll.getPhotos({
            first: 20,
            // assetType: 'Videos'
            assetType: 'All'
        })
            .then(r => {
                const formatedMedia = r.edges.map(item => {
                    return item.node && item.node.image;
                })
                this.setState({ media: formatedMedia });
            })
    }

    onSelect = (index) => {
        console.warn(index)
    }

    onSelectMultiple = (index) => {
        this.setState({multipleSelectMode: true, selectedIndexes:[index]});
    }

    onUnselectAll = () => {
        debugger;
        this.setState({multipleSelectMode: false, selectedIndexes:[]});
    }
    render(){
        const { multipleSelectMode, selectedIndexes } = this.state;
        return (
            <Container style={styles.container}>
                <Header
                    title='All Videos'
                    icon={multipleSelectMode? 'back' : null}
                    iconPress={multipleSelectMode? this.onUnselectAll: null}
                />
                <Content>
                    <Gallery
                        images = {this.state.media}
                        onSelect = {this.onSelect}
                        onSelectMultiple = {this.onSelectMultiple}
                        selectedIndexes={selectedIndexes}
                    />
                </Content>
                <Footer type={'button'} title={'Done'}/>
            </Container>
        )
    }
}

getStoragePermissions = () => {
    if(Platform.OS === 'android'){
        PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE)
            .then(res => {
                if(res !== 'granted') {
                    Alert.alert('Oops!', 'We need permission to access your camera to scan codes')
                }
                // else Alert.alert('great success');
            });
    } else {
        if(Camera){
            Camera.checkDeviceAuthorizationStatus()
                .then(access => {
                    if(!access) {
                        Alert.alert('Oops!', 'We need permission to access your camera to scan codes')
                    }
                    // else navigate('Scanner');
                });
        }
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ECF5FD',
        flex: 1
    },
});