import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';

const TimeButton = ({ onPress, text, backgroundColor }) => {
    // const [selected, setSelected] = useState(false);

    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: backgroundColor }]}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#E6E6E3',
        borderRadius: 50,
        padding: 10,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    selected: {
        backgroundColor: '#1857A3',
    },
    text: {
        color: 'black',
        fontSize: 14,
    },
});

export default TimeButton;
