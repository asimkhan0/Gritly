import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 5
    },
    upperPart: {
        height: 200,
        flexDirection: 'row',
        backgroundColor:'#A382EF',
        paddingRight: 15,
        paddingTop: 15
    },
    graphContainer: {
        flex:6,
        justifyContent: 'space-between'
    },
    xAxisContainer: {
        height: 30,
        flexDirection: 'row',
        backgroundColor: '#A382EF',
        paddingTop:8
    }
})