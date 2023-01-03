import React, { useState } from 'react';
import { Button, View, TouchableOpacity, Text } from 'react-native';

const ThreeButtons = (props) => {
    const [button1Disabled, setButton1Disabled] = useState(true);
    const [button2Disabled, setButton2Disabled] = useState(true);
    const [button3Disabled, setButton3Disabled] = useState(true);

    const enableButton = (buttonNum) => {
        if (buttonNum === 1) {
            setButton1Disabled(false);
            setButton2Disabled(true);
            setButton3Disabled(true);
        } else if (buttonNum === 2) {
            setButton2Disabled(false);
            setButton1Disabled(true);
            setButton3Disabled(true);
        } else if (buttonNum === 3) {
            setButton3Disabled(false);
            setButton1Disabled(true);
            setButton2Disabled(true);
        }
    }

    return (
        <View style={styles.buttonView}>
            <TouchableOpacity onPress={() => enableButton(1)} style={[styles.button, { backgroundColor: button1Disabled ? '#E6E6E3' : '#66BB6A' }]}>
                <Text style={styles.text}>{props.text1}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => enableButton(2)} style={[styles.button, { backgroundColor: button2Disabled ? '#E6E6E3' : '#66BB6A' }]}>
                <Text style={styles.text}>{props.text2}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => enableButton(3)} style={[styles.button, { backgroundColor: button3Disabled ? '#E6E6E3' : '#66BB6A' }]}>
                <Text style={styles.text}>{props.text3}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = {
    buttonView: {
        width: '100%',
        paddingTop: 5,
        paddingBottom: 10,
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#E6E6E3',
        borderRadius: 5,
        padding: 10,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    selected: {
        backgroundColor: '#66BB6A',
    },
    text: {
        color: 'black',
        fontSize: 14,
    },
}

export default ThreeButtons;
