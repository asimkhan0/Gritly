import React from 'react';
import styles from './styles';
import { View} from "native-base";
import { PieChart } from 'react-native-svg-charts';
import { G, Text as SVGText } from 'react-native-svg'
import MetricHeader from "./MetricHeader";
import MetricFooter from "./MetricFooter";

export default class Metric extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }


    render() {

        const data = [25,50,25];

        const color = ['#629C18','#fff','#C0F183'];


        const Labels = ({ slices }) => {
            return slices.map((slice, index) => {
                const { labelCentroid, data } = slice;
                return (
                    <G key={ index }>
                        <SVGText fill={'#fff'} x={labelCentroid[ 0 ] } y={labelCentroid[ 1 ] }>{data.value}%</SVGText>
                    </G>
                )
            })
        };

        const pieData = data
            .filter(value => value > 0)
            .map((value, index) => ({
                value,
                svg: {
                    fill: color[index],
                    onPress: () => console.log('press', index),
                },
                key: `pie-${index}`,
            }));


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
                    padAngle={0}
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