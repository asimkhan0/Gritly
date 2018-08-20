import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const WIDTH = Dimensions.get('window').width;

export default  StyleSheet.create({
    container: {
        marginBottom:20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        fontSize: 14,
        color: '#fff'
    },
    imageContainer: {
        width: 50
    }
});