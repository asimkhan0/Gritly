import React from 'react';
import styles from './styles';
import Text from '../../CustomText/index'
import {Button, View} from "native-base";
import { PieChart } from 'react-native-svg-charts';
import { Circle, G, Line,Text as SVGText } from 'react-native-svg'
import MetricHeader from "./MetricHeader";
import MetricFooter from "./MetricFooter";

export default class Metric extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }


    render() {

        const data = [25,50,25]

        // const randomColor = () => ('#' + (Math.random() * 0xFFFFFF << 0).toString(16) + '000000').slice(0, 7)
        const color = ['#629C18','#fff','#C0F183'];


        const Labels = ({ slices }) => {
            return slices.map((slice, index) => {
                const { labelCentroid, pieCentroid, data } = slice;
                return (
                    <G key={ index }>
                        {/*<Line*/}
                            {/*x1={ labelCentroid[ 0 ] }*/}
                            {/*y1={ labelCentroid[ 1 ] }*/}
                            {/*x2={ pieCentroid[ 0 ] }*/}
                            {/*y2={ pieCentroid[ 1 ] }*/}
                            {/*stroke={ data.svg.fill }*/}
                        {/*/>*/}
                        {/*<Circle*/}
                            {/*cx={ labelCentroid[ 0 ] }*/}
                            {/*cy={ labelCentroid[ 1 ] }*/}
                            {/*r={ 15 }*/}
                            {/*fill={ data.svg.fill }*/}
                        {/*/>*/}
                        <SVGText fill={'#fff'} x={labelCentroid[ 0 ] } y={labelCentroid[ 1 ] }>{data.value}%</SVGText>
                    </G>
                )
            })
        }

        const pieData = data
            .filter(value => value > 0)
            .map((value, index) => ({
                value,
                svg: {
                    fill: color[index],
                    onPress: () => console.log('press', index),
                },
                key: `pie-${index}`,
            }))


        return (
            <View style={[styles.container,{...this.props.style}]}>
                <View style={styles.metricHeader}>
                    <MetricHeader />
                </View>
                <PieChart
                    style={ { height: 220 } }
                    data={ pieData }
                    innerRadius={ 67 }
                    outerRadius={ 90 }
                    labelRadius={ 110 }
                    sort={(a,b)=>0}
                >
                    <Labels/>
                </PieChart>
                <View style={styles.metricFooter}>
                    <MetricFooter />
                </View>
            </View>
        );
    }
}