import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {View, Button, Container, Content} from 'native-base';
import Text from '../components/CustomText';
import Header from "../components/Header";
import PercentageCircle from '../components/PercentageCircle';

import TodoViewHeading from "../components/TodoViewHeading";


ExerciseRow = (props) => {

        return (
            <TouchableOpacity style={styles.row}>
                <Text medium={props.exercise.active} bold={!props.exercise.active} style={styles.rowText}>{`${props.index + 1}. ${props.exercise.title}`}</Text>
                {props.exercise.active?
                    <PercentageCircle radius={13}
                                  percent={70}
                                  color={"#4DFFBA"}
                                  borderWidth={5}
                                  bgcolor={null}
                >
                </PercentageCircle>: null}
            </TouchableOpacity>
        )
}

export default class Todo extends React.Component {

    constructor() {
        super();
        this.state = {
            exercises: [
                {title:'Pushups', active:true},
                {title:'DeadLifts', active:false},
                {title:'Chinups', active:false},
                {title:'Squats', active:false},
                ]
        }
    }



    render(){

        return (
            <Container style={styles.container}>
                <Header title='Warmups & Stretches'  />
                <Content>
                    <TodoViewHeading bgColor={'#ED803B'}/>
                    <Text medium style={styles.progressText}>1 out 4 is complete</Text>
                    <View style={styles.exercisesContainer}>
                        {
                            this.state.exercises.map((exercise, index) => {
                                return <ExerciseRow exercise={exercise} index={index} key={index}/>
                            })
                        }
                    </View>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#ECF5FD'
    },
    progressText: {
        fontSize: 13,
        color: '#fff',
        textAlign: 'center',
        backgroundColor: '#63CC5E',
        paddingVertical: 5
    },
    exercisesContainer: {
        marginTop:12,
        justifyContent: 'center'
    },
    row: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 12,
        marginTop: 4,
        // paddingVertical: 12,
        height:50,
        paddingLeft: 12,
        paddingRight: 18,
        borderRadius: 4,
        alignItems:'center'

    },
    rowText: {
        color: '#253851',
        fontSize:14,
        textAlignVertical:'center'
    }
});