import React from 'react';
import styles from './styles';
import { View } from "native-base";
import Todo from "./Todo";


export default class Todos extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <View style={styles.container}>
                <Todo bgColor={'#A382EF'}/>
                <Todo bgColor={'#ED803B'}/>
                <Todo bgColor={'#92C648'}/>
                <Todo bgColor={'#5CBEC7'}/>
            </View>
        );
    }
}