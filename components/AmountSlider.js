import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider'
import AppText from '../components/AppText';


const AmountSlider = ({ minValue, maxValue, onChange }) => {
    const [value, setValue] = useState(minValue);

    const handleSlidingComplete = () => {
        onChange(value)
    }

    return (
        <View style={styles.container}>
            <AppText style={styles.text} text={'$' + value + '.00'} />
            <Slider
                style={styles.slider}
                value={value}
                onValueChange={setValue}
                onSlidingComplete={handleSlidingComplete}
                minimumValue={minValue}
                maximumValue={parseFloat(maxValue)}
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
        fontSize: 35,
        color: '#82c7a5',
        textAlign: 'center',
        marginBottom: 10
    },
});

export default AmountSlider;
