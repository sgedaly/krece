import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import AppText from '../components/AppText';

const RoundedButton = ({ onPress, text, color, colorText, disabled }) => (
    <TouchableOpacity onPress={onPress} style={[styles.button, { backgroundColor: color }]} disabled={disabled}>
        <AppText style={[styles.text, { color: colorText }]} text={text} />
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    button: {
        width: '100%',
        borderRadius: 50,
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