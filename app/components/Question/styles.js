import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        marginTop: 8,
        //ios shadow
        shadowOpacity: 0.3,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0
        },
        //android shadow
        elevation: 2,
        marginBottom:2
    },
    questionText: {
        color: '#253851',
        fontSize: 14,
        paddingHorizontal: 10,
        paddingVertical: 11,

    },
    radioGroup: {
        flexDirection: 'row'
    },
    radioOptionText: {
        color: '#253851',
        fontSize:14
    },

})