import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        paddingVertical:5,
        width: 90,
        height: 90,
        backgroundColor:'#ff0',
        alignItems: 'center',
        justifyContent:'space-between',
        borderRadius: 4,
        marginHorizontal: 5,
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
    headingText: {
        fontSize:12,
        color:'#fff',
        textAlign:'center'
    },
    valueText: {
        color: 'rgba(0,0,0,0.2)',
        fontSize:14,
        textAlign:'center'

    },
    icon: {
    }
});
