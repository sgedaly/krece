import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const RoundedButton = ({ onPress, text, color, colorText }) => (
    <TouchableOpacity onPress={onPress} style={[styles.button, { backgroundColor: color }]}>
        <Text style={[styles.text, { color: colorText }]}>{text}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    button: {
        width: '100%',
        borderRadius: 5,
        paddingVertical: 12,
        paddingHorizontal: 12,
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default RoundedButton;