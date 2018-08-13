import React from 'react';
import styles from './styles';
import Stat from "./Stat";
import {ScrollView} from "react-native";

export default class PhysicalStats extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }


    render() {
        return (
            <ScrollView
                style={styles.container}
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <Stat style={{backgroundColor:'#FAC900'}}/>
                <Stat style={{backgroundColor:'#FE7B20'}}/>
                <Stat style={{backgroundColor:'#26C1C9'}}/>
                <Stat style={{backgroundColor:'#C778DD'}}/>
            </ScrollView>
        );
    }
}