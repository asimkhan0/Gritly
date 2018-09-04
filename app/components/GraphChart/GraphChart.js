import React from 'react';
import { View } from 'native-base';
import styles from './styles';
import moment from "moment/moment";
import {XAxis, YAxis, StackedAreaChart} from "react-native-svg-charts";
import * as shape from 'd3-shape';

export default GraphChart = (props) => {
    const data = [
        {
            month: new Date(2015, 0, 1),
            apples: 50,
        },
        {
            month: new Date(2015, 1, 1),
            apples: 50,

        },
        {
            month: new Date(2015, 2, 1),
            apples: 50,

        },
        {
            month: new Date(2015, 3, 1),
            apples: 40,

        },{
            month: new Date(2015, 4, 1),
            apples: 50,

        },{
            month: new Date(2015, 5, 1),
            apples: 30,

        },{
            month: new Date(2015, 6, 1),
            apples: 10,

        },{
            month: new Date(2015, 7, 1),
            apples: 70,

        },{
            month: new Date(2015, 8, 1),
            apples: 30,

        },{
            month: new Date(2015, 9, 1),
            apples: 40,

        },{
            month: new Date(2015, 10, 1),
            apples: 50,

        },{
            month: new Date(2015, 11, 1),
            apples: 30,

        },
    ]

    const colors = [ 'rgba(255,255,255,0.5)']
    const keys   = [ 'apples']
    const svgs = [
        { onPress: () => console.log('apples') },
    ];
    const contentInset = { top: 20, bottom: 10 }

    return(
        <View style={styles.container}>
            <View style={styles.upperPart}>
                <YAxis
                    data={ [0,50, 100] }
                    contentInset={ contentInset }
                    svg={{
                        fill: '#fff',
                        fontSize: 10,
                    }}
                    numberOfTicks={ 2 }
                    formatLabel={ value => value!==0?`${value} lbs`:'' }
                    style={{flex:1}}
                />
                <View style={styles.graphContainer}>
                    <StackedAreaChart
                        style={ { height: 200 } }
                        data={ data }
                        yMax={100}
                        keys={ keys }
                        colors={ colors }
                        curve={ shape.curveNatural }
                        svgs={ svgs }
                        style={{flex:6}}

                    />
                </View>
            </View>
            <View style={styles.xAxisContainer}>
                <View style={{flex:1}}></View>
                <XAxis
                    style={{ marginHorizontal: -10,paddingTop: 100}}
                    data={ data }
                    formatLabel={ (value, index) => {return moment(data[index]['month']).format('MMM')} }
                    contentInset={{ left: 10, right: 20 }}
                    svg={{ fontSize: 10, fill: '#fff' }}
                    style={{flex:6}}
                />
            </View>
        </View>
    );
}
