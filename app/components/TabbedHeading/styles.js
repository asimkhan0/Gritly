import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    restContainer: {
        flex: 1,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal: 14,
        marginTop: 7,
        backgroundColor: '#fff',
        borderBottomWidth:1,
        borderBottomColor: '#707070',
        paddingVertical: 8
    },
    restText: {
        color: '#8DABC4',
        fontSize: 12,

    },
    restTextContainer: {

    },
    toggleContainer: {
        justifyContent: 'center'
    },
    toggle: {
        transform: [{ scaleX: .8 }, { scaleY: .8 }]
    },
    leftView: {
        flexDirection: 'row',
        alignItems:'center'
    }

})