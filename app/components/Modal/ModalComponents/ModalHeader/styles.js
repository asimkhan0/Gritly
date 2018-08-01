import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    modalHeaderContainer: {
        paddingHorizontal:  30,
        // paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:"center",

        borderColor: '#707070',
        borderWidth:1
    },
    modalHeadingText: {
        color: '#253851',
        fontSize: 12
    },
    modalSubmitText: {
        color: '#253851',
        fontSize: 12,
        // textStyle: 'underline'
    }
})