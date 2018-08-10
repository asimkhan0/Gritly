import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Dimensions, StyleSheet } from 'react-native';
import { Button, View } from 'native-base';
import { Image } from 'react-native-animatable';

const WIDTH = Dimensions.get('window').width;

export default class GalleryImage extends Component {
    render() {
        const { uri, index, onPress, onLongPress,selected } = this.props;
        return (
            <Button
                onPress={() => onPress(index)}
                onLongPress={() => onLongPress(index)}
                style={{
                    backgroundColor: 'transparent',
                    borderRadius: 0,
                    height: 80,
                    width: WIDTH / 4 ,
                }}
            >
                <Image
                    source={{ uri }}
                    animation={'bounceIn'}
                    delay={100 * index}
                    duration={500}
                    style={styles.imageContainer}
                />
                {selected?
                    <View style={styles.overlay} >
                        <Image source={require('../../../../assets/tick.png')} />
                    </View>: null
                }
            </Button>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: null,
        height: null,
    },
    imageContainer: {
        flex: 1,
        width: null,
        height: null,
        height: 80,
        left: 0,
        position: 'absolute',
        resizeMode: 'cover',
        top: 0,
        width: WIDTH / 4,
        margin: 1
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(69,85,117,0.7)',
        justifyContent: 'center',
        alignItems:'center'
    }
})

GalleryImage.propTypes = {
    uri: PropTypes.string,
    index: PropTypes.number,
    onPress: PropTypes.func,
};

{/*<Image*/}
{/*animation={'bounceIn'}*/}
{/*delay={100 * index}*/}
{/*duration={500}*/}
{/*source={{ uri }}*/}
{/*style={{*/}
{/*height: 80,*/}
{/*left: 0,*/}
{/*position: 'absolute',*/}
{/*resizeMode: 'cover',*/}
{/*top: 0,*/}
{/*width: WIDTH / 3,*/}
{/*margin: 1*/}
{/*}}*/}
{/*/>*/}