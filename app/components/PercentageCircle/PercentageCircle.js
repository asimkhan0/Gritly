import React, { Component } from "react";
import { View, Text } from "react-native";
import styles from './style'

const deg = number => `${number}deg`;

function Disabled(props) {
    let { radius, disabledText } = props.data;
    let diameter = radius * 2;
    return (
        <View
            style={[
                styles.circle,
                {
                    width: diameter,
                    height: diameter,
                    borderRadius: radius
                }
            ]}
        >
            <Text style={styles.text}>{disabledText}</Text>
        </View>
    );
}

function RightTransformer(props) {
    let { radius, rotate, color, percent } = props.data;
    let diameter = radius * 2;
    let half = percent >= 50;

    let rightTransformerDegree = deg(half ? 180 : percent * 3.6);

    return (
        <View
            style={[
                styles.leftWrap,
                {
                    width: radius,
                    height: diameter,
                    left: radius,
                    transform: [
                        { translateX: -radius / 2 },
                        { rotate: deg(rotate) },
                        { translateX: radius / 2 }
                    ]
                }
            ]}
        >
            <View
                style={[
                    styles.loader,
                    {
                        left: -radius,
                        width: radius,
                        height: diameter,
                        borderTopRightRadius: 0,
                        borderBottomRightRadius: 0,
                        backgroundColor: color,
                        transform: [
                            { translateX: radius / 2 },
                            { rotate: rightTransformerDegree },
                            { translateX: -radius / 2 }
                        ]
                    }
                ]}
            />
        </View>
    );
}

function LeftTransformer(props) {
    let { radius, rotate, color, bgcolor, percent } = props.data;
    let diameter = radius * 2;
    let half = percent >= 50;

    let leftTransformerDegree = deg(half ? (percent - 50) * 3.6 : 180);

    return (
        <View
            style={[
                styles.leftWrap,
                {
                    width: radius,
                    height: diameter,
                    left: 0,
                    transform: [
                        { translateX: radius / 2 },
                        { rotate: deg(rotate) },
                        { translateX: -radius / 2 }
                    ]
                }
            ]}
        >
            <View
                style={[
                    styles.loader,
                    {
                        left: radius,
                        width: radius,
                        height: diameter,
                        borderTopLeftRadius: 0,
                        borderBottomLeftRadius: 0,
                        backgroundColor: half ? color : bgcolor,
                        transform: [
                            { translateX: -radius / 2 },
                            { rotate: leftTransformerDegree },
                            { translateX: radius / 2 }
                        ]
                    }
                ]}
            />
        </View>
    );
}

function InnerCircle(props) {
    let {
        radius,
        borderWidth,
        innerColor,
        percent,
        textStyle,
        children
    } = props.data;

    if (borderWidth < 2) borderWidth = 2;

    return (
        <View
            style={[
                styles.innerCircle,
                {
                    width: (radius - borderWidth) * 2,
                    height: (radius - borderWidth) * 2,
                    borderRadius: radius - borderWidth,
                    backgroundColor: innerColor
                }
            ]}
        >
            {children ? (
                children
            ) : (

                null
            )}
        </View>
    );
}

class PercentageCircle extends Component {
    propTypes: {
        color: React.PropTypes.string,
        bgcolor: React.PropTypes.string,
        innerColor: React.PropTypes.string,
        radius: React.PropTypes.number,
        percent: React.PropTypes.number,
        borderWidth: React.Proptypes.number,
        textStyle: React.Proptypes.array,
        disabled: React.PropTypes.bool,
        rotate: React.PropTypes.number
    };

    render() {
        let { bgcolor, disabled, radius } = this.props;
        let diameter = radius * 2;

        return disabled ? (
            <Disabled data={this.props} />
        ) : (
            <View
                style={[
                    styles.circle,
                    {
                        width: diameter,
                        height: diameter,
                        borderRadius: radius,
                        backgroundColor: bgcolor
                    }
                ]}
            >
                <RightTransformer data={this.props} />
                <LeftTransformer data={this.props} />

                <InnerCircle data={this.props} />
            </View>
        );
    }
}

// set some attributes default value
PercentageCircle.defaultProps = {
    textStyle: [],
    percent: 0,
    borderWidth: 2,
    // bgcolor: "#e3e3e3",
    innerColor: "#fff",
    rotate: 0
};

module.exports = PercentageCircle;

{/*<Text style={[styles.text, ...textStyle]}>{percent}%</Text>*/}