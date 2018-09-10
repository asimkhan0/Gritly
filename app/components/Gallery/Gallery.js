import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import GalleryImage from './GalleryImage';

export default class Gallery extends Component {
    constructor(props) {
        super(props);
        this.openLightbox = (index) => {
            this.setState({
                index,
                shown: true,
            });
        };
        this.hideLightbox = () => {
            this.setState({
                index: 0,
                shown: false,
            });
        };
    }
    state = {
        index: 0,
        shown: false,
    };
    render() {
        const { images, onSelect, onSelectMultiple, selectedIndexes } = this.props;
        const { index, shown } = this.state;
        return (
            <View
                style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                }}
            >
                {
                    images.map((image, idx) => {
                        let selected = selectedIndexes.includes(idx);
                       return <GalleryImage
                            index={idx}
                            key={idx}
                            onPress={onSelect}
                            onLongPress={onSelectMultiple}
                            uri={image.uri}
                            selected = {selected}
                        />
                    })
                }
                {/*<ImageViewer*/}
                    {/*shown={shown}*/}
                    {/*imageUrls={images}*/}
                    {/*onClose={this.hideLightbox}*/}
                    {/*index={index}*/}
                {/*/>*/}
            </View>
        );
    }
}
Gallery.propTypes = {
    images: PropTypes.array,
    onSelect: PropTypes.func,
    onSelectMultiple: PropTypes.func
};