import React from 'react';
import styles from './styles';
import { View } from "native-base";
import Text from '../CustomText';
import Input from '../Input';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'


export default class Question extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }
    onSelect(index, value){
        this.setState({
            text: `Selected index: ${index} , value: ${value}`
        })
    }

    render() {
        let {question,answerType,radioOptions} = this.props;
        return (
            <View style={styles.container}>
                <Text medium style={styles.questionText}>{question}</Text>
                {
                    answerType === 'text' ?
                        <Input placeholder='Enter answer here'/>
                        : answerType === 'radio' ?
                        <RadioGroup
                            onSelect = {(index, value) => this.onSelect(index, value)}
                            color={'#253851'}
                            style={styles.radioGroup}
                        >
                            {
                                radioOptions.map((value,index) => {
                                    return (
                                        <RadioButton value={'item1'} key={index}>
                                            <Text medium style={styles.radioOptionText}>{value}</Text>
                                        </RadioButton>
                                    )
                                })
                            }
                        </RadioGroup>: null
                }
                {/*<Text style={styles.text}>{this.state.text}</Text>*/}
            </View>
        );
    }
}