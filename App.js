import React, { useState } from "react";
import { StyleSheet, Text, View, NativeModules } from "react-native";
const { RandomColorGeneratorModule } = NativeModules;

const YourApp = () => {

    const [backgroundColor, setBackgroundColor] = useState("white");

    const randomHex = () => {
        let color = RandomColorGeneratorModule.generate();
        return color;
    }

    const styles = StyleSheet.create({
        app: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: backgroundColor
        },

    });

    const onPress = () => {
        setBackgroundColor(randomHex());
    };

    return (
        <View style={styles.app} onStartShouldSetResponder={onPress}>
            <Text>
                Try click me! 🎉
                --- YILONG CHEN
            </Text>
        </View>
    );
}

export default YourApp;