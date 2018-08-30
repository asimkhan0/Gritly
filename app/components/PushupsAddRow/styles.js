import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    pushupsAddRow: {
        backgroundColor:'#fff',
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
        paddingVertical:12
    },
    left:{
        flex:1
    },
    right: {
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    image: {
        marginRight:13
    },
    addText: {
        color: '#253851',
        fontSize: 12
    }
});