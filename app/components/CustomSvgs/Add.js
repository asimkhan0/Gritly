'use strict';

import React, { Component } from 'react';
import Svg, { G, Path, LinearGradient, Defs, Stop,Circle } from 'react-native-svg'

export default class Add extends Component {

    render() {
        return (
            <Svg height={40} width={48}>
                <Defs>
                    <LinearGradient id="Linear-gradient" x1="0" x2="0" y2="100%" gradientUnits="objectBoundingBox">
                        <Stop offset="0%" stopColor="#74f0e7"/>
                        <Stop offset="100%" stopColor="#09a79b"/>
                    </LinearGradient>
                </Defs>
                <G id="Add" transform="translate(-181 -582)">
                    <Circle fill="url(#Linear-gradient)" id="Circle"  cx="18" cy="18" r="18" transform="translate(181 582)"/>
                    <G id="Add-2" data-name="Add" fill='white' transform="translate(-3520 3576.5)">
                        <Path style={{stroke: 'none'}} d="M 3720.135986328125 -2969 L 3719.635986328125 -2969 L 3718.36328125 -2969 L 3717.86328125 -2969 L 3717.86328125 -2969.5 L 3717.86328125 -2975.2998046875 L 3712 -2975.2998046875 L 3711.5 -2975.2998046875 L 3711.5 -2975.7998046875 L 3711.5 -2977.19970703125 L 3711.5 -2977.69970703125 L 3712 -2977.69970703125 L 3717.86328125 -2977.69970703125 L 3717.86328125 -2983.50048828125 L 3717.86328125 -2984.00048828125 L 3718.36328125 -2984.00048828125 L 3719.635986328125 -2984.00048828125 L 3720.135986328125 -2984.00048828125 L 3720.135986328125 -2983.50048828125 L 3720.135986328125 -2977.69970703125 L 3726.000244140625 -2977.69970703125 L 3726.500244140625 -2977.69970703125 L 3726.500244140625 -2977.19970703125 L 3726.500244140625 -2975.7998046875 L 3726.500244140625 -2975.2998046875 L 3726.000244140625 -2975.2998046875 L 3720.135986328125 -2975.2998046875 L 3720.135986328125 -2969.5 L 3720.135986328125 -2969 Z"/>
                        <Path style={{stroke: 'none'}} fill='white' d="M 3719.635986328125 -2969.5 L 3719.635986328125 -2975.7998046875 L 3726.000244140625 -2975.7998046875 L 3726.000244140625 -2977.19970703125 L 3719.635986328125 -2977.19970703125 L 3719.635986328125 -2983.50048828125 L 3718.36328125 -2983.50048828125 L 3718.36328125 -2977.19970703125 L 3712 -2977.19970703125 L 3712 -2975.7998046875 L 3718.36328125 -2975.7998046875 L 3718.36328125 -2969.5 L 3719.635986328125 -2969.5 M 3720.635986328125 -2968.5 L 3719.635986328125 -2968.5 L 3718.36328125 -2968.5 L 3717.36328125 -2968.5 L 3717.36328125 -2969.5 L 3717.36328125 -2974.7998046875 L 3712 -2974.7998046875 L 3711 -2974.7998046875 L 3711 -2975.7998046875 L 3711 -2977.19970703125 L 3711 -2978.19970703125 L 3712 -2978.19970703125 L 3717.36328125 -2978.19970703125 L 3717.36328125 -2983.50048828125 L 3717.36328125 -2984.50048828125 L 3718.36328125 -2984.50048828125 L 3719.635986328125 -2984.50048828125 L 3720.635986328125 -2984.50048828125 L 3720.635986328125 -2983.50048828125 L 3720.635986328125 -2978.19970703125 L 3726.000244140625 -2978.19970703125 L 3727.000244140625 -2978.19970703125 L 3727.000244140625 -2977.19970703125 L 3727.000244140625 -2975.7998046875 L 3727.000244140625 -2974.7998046875 L 3726.000244140625 -2974.7998046875 L 3720.635986328125 -2974.7998046875 L 3720.635986328125 -2969.5 L 3720.635986328125 -2968.5 Z"/>
                    </G>
                </G>
            </Svg>
        );
    };
}