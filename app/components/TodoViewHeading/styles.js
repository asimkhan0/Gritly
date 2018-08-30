import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        //backgroundColor: '#A382EF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 12,
        paddingRight: 9,
        paddingVertical: 11,
    },
    // left: {flex:1},
    right: {
        justifyContent:'flex-end'
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
        paddingTop: 8
    },
    trainerInfoContainer: {
        flexDirection: 'row',
        marginTop: 13,
        alignItems:'center'
    },
    trainerNameText: {
        color: '#fff',
        fontSize: 12,
        paddingLeft: 8
    },
    trainerImg: {
    },
});