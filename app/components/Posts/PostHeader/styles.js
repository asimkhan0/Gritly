import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 10,
        paddingTop: 10,
        paddingBottom: 5,
        flexDirection: 'row',
        backgroundColor: '#fff',
    },
    headingTextContainer: {
        paddingLeft:7
    },
    headingNameContainer: {
        flexDirection: 'row'
    },
    editButtonContainer: {
        paddingHorizontal: 12,
        marginVertical: 0
    },
    editButton: {
        height: 16,
        width: 4,
    },
    left: {
        flex: 3,
        flexDirection:'row'
    },
    right: {
        flex: 1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-end',
    },
    nameText: {
        color: '#253851',
        fontSize: 12
    },
    positionText: {
        color: '#8DABC4',
        fontSize: 12
    },
    dateText: {
        color: '#8DABC4',
        fontSize: 9
    },
})