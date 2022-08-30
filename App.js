import React, { useState } from "react";
import { StyleSheet, Text, View, NativeModules} from "react-native";
const { RandomColorGeneratorModule } = NativeModules;

const YourApp = () => {

    const [bgColor, setBgColor] = useState("white");
    
    function randomHex() {
        let color = RandomColorGeneratorModule.generate();
        return color;
    }

    var styles = StyleSheet.create({
        app: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: bgColor
        },

    });

    const onPress = () => {
        setBgColor(randomHex());
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