import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        paddingVertical: 10,
        backgroundColor: '#fff',

        //ios shadow
        shadowOpacity: 0.3,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0
        },
        //android shadow
        elevation: 2,
    },
    textContainer: {
        paddingHorizontal:20,
        paddingTop:10,
    },
    descriptionText: {
        fontSize: 14,
        color:'#253851'
    }
})