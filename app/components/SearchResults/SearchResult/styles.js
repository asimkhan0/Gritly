import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const WIDTH = Dimensions.get('window').width;

export default  StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 4,
        //ios shadow
        shadowOpacity: 0.3,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0
        },
        //android shadow
        elevation: 2,
        width: WIDTH * 0.44,
        marginBottom:20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        borderWidth:1,
        borderRadius:100,
        borderColor: '#09A79B',
        marginHorizontal: 8,
        marginVertical:12
    },
    name: {
        fontSize: 14,
        color: '#253851'
    },
    city: {
        fontSize: 10,
        color: '#8DABC4'
    }
});