import React from 'react';
import styles from './styles';
import Stat from "./Stat";
import {ScrollView} from "react-native";

export default class UserStats extends React.Component {

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
                <Stat />
                <Stat />
                <Stat />
                <Stat />
        </ScrollView>
        );
    }
}