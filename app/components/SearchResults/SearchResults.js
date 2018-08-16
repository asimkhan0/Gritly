import React from 'react';
import styles from './styles';
import { View } from "native-base";
import SearchResult from './SearchResult';

export default Activities = props => {

    return (
        <View style={styles.container}>
            <SearchResult />
            <SearchResult />
            <SearchResult />
            <SearchResult />
            <SearchResult />
            <SearchResult />
        </View>
    );
}