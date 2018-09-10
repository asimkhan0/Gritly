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
                <Todo
                    bgColor={'#A382EF'}
                    title='SHOULDER INJURY STABILITY'
                    subTitle='4 Exercise by Nick Texune'
                    type='program'
                    {...this.props}
                />
                <Todo
                    bgColor={'#ED803B'}
                    title='SHOULDER INJURY STABILITY'
                    subTitle='4 Exercise by Nick Texune'
                    type='program'
                    {...this.props}
                />

                <Todo
                    bgColor={'#92C648'}
                    title='WALK TWICE A DAY'
                    subTitle='Go outside for 30 atleast minutes and walk '
                    type='tracker'
                    {...this.props}
                />

                <Todo
                    bgColor={'#5CBEC7'}
                    title='WALK TWICE A DAY'
                    subTitle='Go outside for 30 atleast minutes and walk '
                    type='tracker'
                    {...this.props}
                />

            </View>
        );
    }
}