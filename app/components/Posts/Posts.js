import React from 'react';
import styles from './styles';
import Text from '../CustomText'
import { View } from "native-base";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";


export default class Posts extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.postContainer}>
                    <PostHeader/>
                    <View style={styles.content}>
                        <Text regular style={styles.contentText}>
                        Bring Up Your Rear. For a strong backside that will
                        turn heads wherever you go, Marta Montenegro, recommends
                        completing 10 swings nonstop with a moderate weight at
                        the end of a legs workout.
                        </Text>
                    </View>
                    <PostFooter/>
                </View>
                <View style={styles.postContainer}>
                    <PostHeader/>
                    <View style={styles.content}>
                        <Text regular style={styles.contentText}>
                            Bring Up Your Rear. For a strong backside that will
                            turn heads wherever you go, Marta Montenegro, recommends
                            completing 10 swings nonstop with a moderate weight at
                            the end of a legs workout.
                        </Text>
                    </View>
                    <PostFooter/>
                </View>
            </View>
        );
    }
}