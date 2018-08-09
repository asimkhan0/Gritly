import {Dimensions, StyleSheet} from 'react-native';
const WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        width: WIDTH / 3-10,
        height:85,
        justifyContent:'flex-end',
        paddingHorizontal: 2,
    },
    imageContainer: {
        width: (WIDTH / 3)-20,
        height:80
    },
    image: {
        flex: 1,
        width: null,
        height: null,
        height: 80,
        left: 0,
        position: 'absolute',
        resizeMode: 'stretch',
        top: 0,
        width: (WIDTH / 3)-20
    },

    overlay: {
        ...StyleSheet.absoluteFillObject,
        // backgroundColor: 'rgba(69,85,117,0.1)',
        justifyContent: 'flex-start',
        alignItems:'flex-end',
        paddingTop:0
    }
});

export default styles;