import React from 'react';
import { View } from 'native-base';
import styles from './styles';
import { TouchableOpacity} from "react-native";
import Text from '../CustomText';
import Svg, {Image, G, Circle, Rect, Polygon} from 'react-native-svg';

export default class HumanBody extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.humanPicContainer}>
                    <Svg
                        height="512"
                        width="372"
                    >
                        <G>
                            <Image href={require('../../../assets/humanFront.png')}
                                   x="0%"
                                   y="0%"
                                   width="100%"
                                   height="100%"
                                   preserveAspectRatio="xMidYMid slice"
                                   opacity="1"
                                   clipPath="url(#clip)"
                            />
                            <Polygon
                                points="189,17,169,31,167,50,169,65,173,73,182,79,194,80,200,77,204,69,209,55,209,41,205,29,199,20,194,18,179,19,173,23,167,40"
                                fill="none"
                                stroke="none"
                                strokeWidth="0"
                                title='Head'
                                onPress={this.props.editable?(ev) => this.props.drawPoint(ev,'Head'):null}
                            />
                            <Polygon
                                points="306,258,313,258,313,268,308,268"
                                fill="none"
                                stroke="none"
                                strokeWidth="0"
                                title='Thumb'
                                onPress={this.props.editable?(ev) => this.props.drawPoint(ev,'Thumb'):null}
                            />

                            {/*<Rect*/}
                                {/*x="0"*/}
                                {/*y="0"*/}
                                {/*width="100%"*/}
                                {/*height="100%"*/}
                                {/*stroke="none"*/}
                                {/*strokeWidth="0"*/}
                                {/*fill="none"*/}
                            {/*/>*/}
                            <Circle
                                cx={this.props.locationX || -20}
                                cy={this.props.locationY || -20}
                                r="1.5%"
                                fill="red"
                            />
                        </G>
                    </Svg>
                </View>
                <View style={styles.bodyTabsContainer}>
                    <TouchableOpacity>
                        <Text semiBold style={[styles.tabText, styles.selectedTab]}>Left</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text semiBold style={[styles.tabText]}>Front</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text semiBold style={[styles.tabText]}>Right</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text semiBold style={[styles.tabText]}>Back</Text>
                    </TouchableOpacity>

                </View>
            </View>
        );
    }
}
/*
    return(
        <View style={styles.container}>
            <View style={styles.humanPicContainer}>
                <Image source={require('../../../assets/humanFront.png')}
                       style={styles.humanPic}
                       onPress={(ev) => console.warn(ev)}
                />
            </View>
            <View style={styles.bodyTabsContainer}>
                <TouchableOpacity>
                    <Text semiBold style={[styles.tabText,styles.selectedTab]}>Left</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text semiBold style={[styles.tabText]}>Front</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text semiBold style={[styles.tabText]}>Right</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text semiBold style={[styles.tabText]}>Back</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
 */
