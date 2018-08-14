import { StyleSheet } from 'react-native';
import { Fonts } from '../../utils/Fonts';

export default StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#F7F7F7',
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
    dateNumberStyle:{
        color:'#999999',
        fontFamily:Fonts.MontSerrat,
        fontSize:12,
    },
    highlightDateNumberStyle:{
        backgroundColor: '#253851',
        borderRadius:100,
        color:'#fff',
        fontFamily:Fonts.MontSerrat,
        fontSize:12,
        padding:7
    },

    dateBottomText: {
        color: '#000',
        fontSize:14,
        textAlign:'center',
        marginTop:11,
        paddingBottom:6
    }
})