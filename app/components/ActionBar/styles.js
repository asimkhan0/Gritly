import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        paddingHorizontal: 13,
        flexDirection: 'row',
        backgroundColor: '#fff',
        // borderBottomWidth:1,
        // borderColor:'#8DABC4'

        //ios shadow
        shadowOpacity: 0.3,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0
        },
        //android
        //
        //
        // shadow
        elevation: 1
    },
    text: {
        paddingVertical: 10,
        marginRight: 10,
        minWidth: 41,
        color: '#8DABC4',
        fontSize: 12
        // marginLeft: 20,
    },
    textSelected: {
        borderStyle: 'solid',
        borderBottomWidth: 3,
        borderColor: '#00E8C6',
        color: '#253851'
    },
    filterImg: {
        width: 30,
        height: 15
    }
})