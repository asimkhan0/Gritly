import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {

    },
    humanPicContainer: {
        backgroundColor: '#000',
        alignItems:'center'
    },
    humanPic: {
        height: 512,
        width: 372
    },
    bodyTabsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#000',
        marginBottom: 3
    },
    tabText: {
        color: '#fff',
        fontSize:14,
        paddingHorizontal:10,
        paddingVertical: 5
    },
    selectedTab: {
        borderBottomColor: '#fff',
        borderBottomWidth: 6,
    },
})