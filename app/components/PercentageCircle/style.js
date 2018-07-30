import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    circle: {
        overflow: "hidden",
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#e3e3e3"
    },

    leftWrap: {
        overflow: "hidden",
        position: "absolute",
        top: 0
    },

    loader: {
        position: "absolute",
        left: 0,
        top: 0,
        borderRadius: 1000
    },

    innerCircle: {
        overflow: "hidden",
        position: "relative",
        justifyContent: "center",
        alignItems: "center"
    },

    text: {
        fontSize: 11,
        color: "#888"
    }
});

export default styles;