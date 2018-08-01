import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        paddingHorizontal: 13,
        paddingVertical: 18,
        backgroundColor: '#fff',
        //ios shadow
        shadowOpacity: 0.3,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0
        },
        //android
        elevation: 1
    },

    setsContainer: {
    },
    setsItemContainer: {

    }
})