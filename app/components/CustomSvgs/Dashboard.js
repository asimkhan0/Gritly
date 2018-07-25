'use strict';

import React, { Component } from 'react';
import Svg,
      { G,
        Path ,
        Text ,
        TSpan ,
        Line } from 'react-native-svg'

export default class Dashboard extends Component {

    render() {
        return (
            <Svg height={40} width={48}>

                <g id="Todo" transform="translate(-14 -629)">
                    <text id="Tab_Label" data-name="Tab Label"  transform="translate(14 649.5)">
                        <tspan x="0.403" y="11">Dashboard</tspan>
                    </text>
                    <g id="Group_309" data-name="Group 309" transform="translate(67 591)">
                        <g id="Group_310" data-name="Group 310" transform="translate(-40 38)">
                            <g id="Group_308" data-name="Group 308">
                                <line id="Line_11" data-name="Line 11" y2="1.9"
                                      transform="translate(11.1 3.8)"/>
                                <line id="Line_12" data-name="Line 12" x1="2"
                                      transform="translate(16.5 11.1)"/>
                                <line id="Line_13" data-name="Line 13"  x1="1.8"
                                      transform="translate(3.9 11.1)"/>
                                <line id="Line_14" data-name="Line 14"  x1="1.5" y1="1.5"
                                      transform="translate(5.8 5.8)"/>
                                <line id="Line_15" data-name="Line 15"  y1="5.1" x2="5.1"
                                      transform="translate(10.9 6.2)"/>
                            </g>
                            <path id="Path_795" data-name="Path 795"
                                  d="M18.9,4.6a10.074,10.074,0,0,1-7.7,16.6A10.1,10.1,0,1,1,11.1,1a10.493,10.493,0,0,1,4.7,1.1"/>
                            <path id="Path_796" data-name="Path 796"
                                  d="M15.1,16.5a4.736,4.736,0,0,0-8,0"/>
                        </g>
                    </g>
                </g>
            </Svg>
        );
    };
}