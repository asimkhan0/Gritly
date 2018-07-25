import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        paddingHorizontal: 13,
        flexDirection: 'row',
        // borderBottomWidth:1,
        // borderColor:'#8DABC4'
    },
    text: {
        paddingVertical: 10,
        marginRight: 10,
        minWidth: 41,
        // marginLeft: 20,
    },
    textSelected: {
        borderStyle: 'solid',
        borderBottomWidth: 3,
        borderColor: '#00E8C6',
    },
    filterImg: {
        width: 30,
        height: 15
    }
})