import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';


const Dropdown = () => {
    const [selectedValue, setSelectedValue] = useState('option1');

    return (
        <View>
            <Picker
                selectedValue={selectedValue}
                style={{ height: 10, with: 100 }}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                <Picker.Item label="Una semana" value="Una semana" />
                <Picker.Item label="Dos semanas" value="Dos semanas" />
                <Picker.Item label="Un mes" value="Dos semanas" />
            </Picker>
        </View>
    );
};

export default Dropdown;