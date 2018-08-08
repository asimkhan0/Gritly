import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 15,
        paddingHorizontal: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#707070'
    },
    headingTextContainer: {

    },
    headingIconContainer: {
        justifyContent:'center',
        justifyContent:'flex-end',
        width: 20
    },
    pencilIcon: {
        height:13,
        width:13,
    },
    headingText:{
        fontSize: 14,
        color: '#253851'
    },
    subHeadingText:{
        fontSize: 10,
        color: '#9BB5CB'
    }
})