import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    setContainer: {
        height: 80,
        width: 70,
        marginLeft: 20,
        borderRadius: 4,
        padding:13
    },
    setNameTextContainer: {
        justifyContent:'center'
    },
    setNameText: {
        color:"#fff",
        fontSize: 14,
        textAlign:'center',
    },
    setDetailsTextContainer:{
        justifyContent:'center'

    },
    setDetailsText: {
        color:"#fff",
        fontSize: 14,
        textAlign:'center'
    },


    inactiveSetCont: {
        backgroundColor: '#fff',
        // borderWidth:1,
        // borderColor:'#707070',

    },
    activeSetCont: {
        backgroundColor: '#253851',
    },
    activeSetNameText: {
        color:'#fff'
    },
    inactiveSetNameText: {
        color:"#8DABC4"
    },
    activeSetDetailsText: {
        color:'#fff'
    },
    inactiveSetDetailsText: {
        color:'#253851'
    },
})