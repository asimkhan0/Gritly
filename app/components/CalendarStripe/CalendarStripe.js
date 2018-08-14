import React from 'react';
import { View } from 'native-base';
// import CalendarStrip from 'react-native-calendar-strip';
import CalendarStrip from '../CustomCalenderStripe/CalendarStrip';
import styles from './styles';
import moment from 'moment';
import Text from '../CustomText';

export default class CalendarStripe extends React.Component {
    //
    // constructor(props){
    //     super(props);
    //     this.state = {
    //
    //     }
    // }
    state = {
        selectedDate: moment(new Date()).format('dddd, MMMM D, YYYY').toString()
    }
    dateSelected = (selectedDate) => {
        const date = moment(selectedDate).format('dddd, MMMM D, YYYY').toString();
        this.setState({selectedDate: date})
    }
    render() {
        return(
            <View>
                <View style={styles.container}>
                    <CalendarStrip
                        highlightDateNumberStyle={[styles.dateNumberStyle,styles.highlightDateNumberStyle]}
                        dateNumberStyle={styles.dateNumberStyle}
                        weekendDateNumberStyle={styles.dateNumberStyle}
                        showMonth={false}
                        onDateSelected={this.dateSelected}
                    />
                    <Text medium style={styles.dateBottomText}>{this.state.selectedDate}</Text>
                </View>
            </View>
        )
    }
}