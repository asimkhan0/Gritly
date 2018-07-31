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
        borderBottomColor: '#707070'
    },
    restText: {
        color: '#8DABC4',
        fontSize: 12,
        paddingVertical: 7,

    },
    restTextContainer: {

    },
    toggleContainer: {
        justifyContent: 'center'
    },
    toggle: {
        transform: [{ scaleX: .8 }, { scaleY: .8 }]
    }
})