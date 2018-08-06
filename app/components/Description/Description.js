import React from 'react';
import styles from './styles';
import Text from '../CustomText'
import {Button, View, Icon} from "native-base";
import ViewMoreText from 'react-native-view-more-text';

import DescriptionHeader from "./DescriptionHeader";

export default class Description extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }

        this._renderTruncatedFooter = this._renderTruncatedFooter.bind(this);
        this._renderRevealedFooter = this._renderRevealedFooter.bind(this);
    }


    render() {
        return (
            <View style={styles.container}>
                <DescriptionHeader />
                <View style={styles.textContainer}>
                    <ViewMoreText
                        numberOfLines={4}
                        renderTruncatedFooter={this._renderTruncatedFooter}
                        renderRevealedFooter={this._renderRevealedFooter}
                        onReady={this._handleTextReady}
                    >
                        <Text medium style={styles.descriptionText}>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500 when an unknown
                            printer took a galley of type and scrambled it to make a
                            type specimen book.</Text>
                    </ViewMoreText>
                </View>
            </View>
        );
    }


    _renderTruncatedFooter = (handlePress) => {
        return (
            <Text style={{color: 'blue', marginTop: 5}} onPress={handlePress}>
                Read more
            </Text>
        );
    }

    _renderRevealedFooter = (handlePress) => {
        return (
            <Text style={{color: 'blue', marginTop: 5}} onPress={handlePress}>
                Show less
            </Text>
        );
    }

    _handleTextReady = () => {
        // ...
    }
}