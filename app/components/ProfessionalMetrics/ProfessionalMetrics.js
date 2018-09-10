import React from 'react';
import styles from './styles';
import Metric from "./Metric";
import { Dimensions } from "react-native";
import Carousel from 'react-native-snap-carousel';
import { View } from "native-base";
import Text from '../CustomText';

const WIDTH = Dimensions.get('window').width;

export default class ProfessionalMetrics extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            entries: [
                {title: 'hello',style: {backgroundColor: '#81CA25'}},
                {title: 'hello',style: {backgroundColor: '#FF7373'}},
                {title: 'hello',style: {backgroundColor: '#26C1C9'}},
                {title: 'hello',style: {backgroundColor: '#000'}},

            ]
        }
    }
    _renderItem ({item, index}) {
        return (
            <Metric style={item.style}/>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <Text medium style={styles.professionalMetricHeadText}>Professional Metrics</Text>

                <Carousel
                    ref={(c) => { this._carousel = c; }}
                    data={this.state.entries}
                    renderItem={this._renderItem}
                    sliderWidth={WIDTH}
                    itemWidth={WIDTH * 0.78}
                    layout={'default'}
                    firstItem={1}
                />
            </View>
        );
    }
}