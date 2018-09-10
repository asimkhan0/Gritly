import React from 'react';
import { TouchableOpacity, Image, Dimensions} from 'react-native';
import styles from './styles';
import Text from '../../CustomText'
import { View } from "native-base";
import { Bar } from 'react-native-progress';

const WIDTH = Dimensions.get('window').width;

export default class Todo extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        let {bgColor,title,subTitle,navigation,type} = this.props;

        return (
            <TouchableOpacity style={[styles.container,{backgroundColor:bgColor}]}
                              onPress={() =>
                              {type==='program' ?
                                  navigation.navigate('enterProgramData', {title}):
                                  navigation.navigate('enterTrackerData', {title})
                              }

                              }
            >
                <View style={styles.left}>
                    <Text bold   style={styles.todoHeading}>{title}</Text>
                    <Text medium style={styles.todoSubtitle}>{subTitle}</Text>
                    <View style={styles.barContainer}>
                        <Bar progress={0.5}
                             width={WIDTH/2}
                             height={12}
                             color={'#fff'}
                             borderColor={bgColor}
                             borderRadius={10}
                            // unfilledColor={'#EAF2FA'}
                             unfilledColor={'rgba(255,255,255,0.4)'}
                        />
                    </View>
                </View>
                <View style={styles.right}>
                    <Image source={type==='program' ? require('../../../../assets/todo100.png') : require('../../../../assets/tracker.png')}
                           style={{opacity:0.5}}
                    />

                </View>
            </TouchableOpacity>
        );
    }
}