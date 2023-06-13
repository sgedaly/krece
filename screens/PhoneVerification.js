import React, { useState, useRef } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AppText from '../components/AppText';

const PhoneVerification = () => {
    const [verificationCode, setVerificationCode] = useState('');
    const codeInputRefs = useRef([]);

    const handleVerificationCodeChange = (value, index) => {
        const newVerificationCode = verificationCode.split('');
        newVerificationCode[index] = value;
        setVerificationCode(newVerificationCode.join(''));

        if (value !== '' && index < codeInputRefs.current.length - 1) {
            codeInputRefs.current[index + 1].focus();
        }
    };

    const handleVerificationCodeKeyPress = (event, index) => {
        if (event.nativeEvent.key === 'Backspace' && index > 0) {
            codeInputRefs.current[index - 1].focus();
        }
    };

    return (
        <View style={{ flex: 1, backgroundColor: '#1b212c' }}>
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={styles.backButton}
                    >
                        <Ionicons name="ios-arrow-back" size={32} color="#82c7a5" />
                    </TouchableOpacity>
                    <Ionicons name="ios-arrow-back" size={32} color="#1b212c" />
                </View>
            </View>
            <View style={styles.container}>
                <View style={styles.codeContainer}>
                    {Array.from({ length: 6 }).map((_, index) => (
                        <TextInput
                            key={index}
                            style={styles.codeInput}
                            value={verificationCode[index] || ''}
                            maxLength={1}
                            onChangeText={(value) => handleVerificationCodeChange(value, index)}
                            onKeyPress={(event) => handleVerificationCodeKeyPress(event, index)}
                            keyboardType="numeric"
                            ref={(ref) => (codeInputRefs.current[index] = ref)}
                            color={'white'}
                        />
                    ))}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    codeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
    },
    header: {
        height: '15%',
        borderBottomWidth: 2,
        borderBottomColor: '#1b212c',
        backgroundColor: '#1b212c',
        padding: 20,
        justifyContent: 'flex-end'
    },
    headerContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    codeInput: {
        borderWidth: 1,
        borderColor: '#364058',
        borderRadius: 5,
        padding: 10,
        width: '14%',
        textAlign: 'center',
        fontSize: 20,
    },
});

export default PhoneVerification;
