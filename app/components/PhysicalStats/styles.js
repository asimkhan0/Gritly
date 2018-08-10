import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingBottom: 40,
        backgroundColor: '#fff',
        shadowOpacity: 0.3,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0
        },
        elevation: 2
    },
    textContainer: {
        paddingHorizontal:20,
        paddingTop:10,
    },
    descriptionText: {
        fontSize: 14,
        color:'#253851'
    }
})