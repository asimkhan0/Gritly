import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        marginTop:1,
        paddingHorizontal: 13,
        paddingTop:10,
        paddingBottom:20,
        backgroundColor: '#fff',

        //ios shadow
        shadowOpacity: 0.3,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0
        },
        //android shadow
        elevation: 1
    },

    headerContainer: {

        flexDirection: 'row',
        flex: 1,//for child flex
    },
    restingViewContainer: {
        flex: 1,
        flexDirection:'row',
        alignItems:'center',
        flexWrap:'wrap'
    },
    numberText:{
        borderBottomWidth: 0.7,
        borderBottomColor:'#707070',
        width: 38,
        textAlign:'center',
        marginHorizontal:7,
    },
    text: {
        fontSize: 14,
        color: '#8DABC4',
    },
    addHrContainer: {
        backgroundColor: '#253851',
        borderRadius:4,
        marginTop: 17
    },
    addHRText: {
        color: '#fff',
    }
})