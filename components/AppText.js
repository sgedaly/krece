import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { useFonts, Poppins_500Medium, Poppins_600SemiBold } from '@expo-google-fonts/poppins';


const AppText = (props) => {
    let [fontsLoaded] = useFonts({
        Poppins_500Medium,
        Poppins_600SemiBold
    });
    if (!fontsLoaded) {
        return null;
    }
    const { style, ...rest } = props
    return (
        <View>
            <Text style={[style, { fontFamily: 'Poppins_500Medium' }]}>
                {props.text}
            </Text>
        </View>
    )
}

export default AppText;

