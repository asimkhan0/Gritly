import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    numberContainer: {
        marginHorizontal: 33,
        borderRadius: 4,
        padding:13,
        flexDirection:'row'
    },
    numberTitle: {
        flex:1
    },
    numberTitleText:{
        color: '#253851',
        fontSize:14
    },
    numberViewContainer: {
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-end'
    },
    numberText: {
        fontSize: 25,
        color: '#8DABC4',
        borderBottomWidth: 0.7,
        borderBottomColor:'#707070',
        width: 60,
        textAlign:'center',
        marginHorizontal:16
    },
    icon: {
        color: '#8DABC4',
        alignSelf:'center',

    }
})