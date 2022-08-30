import React, { useCallback, useState } from 'react';
import { TouchableWithoutFeedback, View, Text, StyleSheet, NativeModules} from 'react-native';
const { RandomColorGeneratorModule } = NativeModules;

const styles = StyleSheet.create({
    app: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
});

const App = () => {
    const [backgroundColor, setBackgroundColor] = useState('white');
    const randomHex = useCallback(() => {
        const color = RandomColorGeneratorModule.generate();
        return color;
    }, []);

    const onPress = useCallback(() => {
        setBackgroundColor(randomHex());
    }, [randomHex]);

    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={[styles.app, { backgroundColor: backgroundColor }]}>
                <Text>Try click me! 🎉 --- YILONG CHEN</Text>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default App;