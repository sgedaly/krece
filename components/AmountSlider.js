import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider'

const AmountSlider = () => {
    const [value, setValue] = useState(50);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>${value}.00</Text>
            <Slider
                style={styles.slider}
                value={value}
                onValueChange={setValue}
                minimumValue={50}
                maximumValue={500}
                step={1}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'stretch',
        paddingVertical: 24
    },
    slider: {
        // marginVertical: 20,
    },
    text: {
        fontSize: 50,
        color: '#66BB6A',
        textAlign: 'center',
        marginBottom: 20
    },
});

export default AmountSlider;
