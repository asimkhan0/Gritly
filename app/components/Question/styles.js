import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
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
        backgroundColor: '#fff',
        color: '#253851',
        fontSize: 14,
        paddingHorizontal: 10,
        paddingVertical: 11,

    },
    radioGroup: {
        backgroundColor: '#fff',
        flexDirection: 'row',

        //ios shadow
        shadowOpacity: 0.3,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0
        },
        //android shadow
        elevation: 1,
        marginTop:1
    },
    radioOptionText: {
        color: '#253851',
        fontSize:14
    },

})