import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        paddingHorizontal: 13,
        paddingVertical: 18,
        backgroundColor: '#fff',
        //ios shadow
        shadowOpacity: 0.3,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0
        },
        //android
        elevation: 1
    },
    setHeaderContainer: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingBottom: 27,
    },
    setTitle: {
        fontSize: 14,
        color: '#8DABC4'
    },
    setEdit: {
        fontSize: 12,
        color: '#8DABC4'
    },

    setsContainer: {
    },
    setsItemContainer: {

    }
})