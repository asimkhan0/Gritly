import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        //backgroundColor: '#A382EF',
        borderRadius: 4,
        marginHorizontal: 12,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 12,
        paddingRight: 9,
        paddingTop: 9,
        paddingBottom: 17,
    },
    // left: {flex:1},
    right: {
        paddingTop: 3
    },
    todoHeading: {
        color:'#fff',
        fontSize: 11
    },
    todoSubtitle: {
        color:'#fff',
        fontSize: 10,
        paddingTop: 6
    },
    barContainer: {
        paddingTop: 31
    }
});