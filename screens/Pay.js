import React, { useEffect, useState, setState } from 'react';
import { View, TouchableOpacity, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import RoundedButton from '../components/RoundedButton';
import AppText from '../components/AppText';
import { useNavigation } from '@react-navigation/native';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import auth from '../auth';



const Pay = () => {
    const navigation = useNavigation();
    const [isLoading, setIsLoading] = useState(true);
    const [selectedPayMethod, setSelectedPayMethod] = useState('');
    const [confirmationNum, setConfirmationNum] = useState('');

    const checkFields = () => {
        if (email !== '' && password !== '') {
            //TODO: Check that email and password match
            signInUser()
        } else {
            Alert.alert(
                'Llene todos sus datos para continuar',
                '',
                [
                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                ],
                { cancelable: false },
            )
        }
    }

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
                    <AppText style={styles.title} text='Pago de cuota' />
                    <Ionicons name="ios-arrow-back" size={32} color="#1b212c" />
                </View>
            </View>
            <View style={styles.content}>
                <AppText style={styles.label} text='Método de pago' />
                <View style={styles.container}>
                    <TouchableOpacity
                        style={[
                            styles.option,
                            selectedPayMethod === 'Zelle' && styles.selectedOption,
                        ]}
                        onPress={() => setSelectedPayMethod('Zelle')}
                    >
                        <Text style={styles.optionText}>Zelle</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[
                            styles.option,
                            selectedPayMethod === 'PagoMóvil' && styles.selectedOption,
                        ]}
                        onPress={() => setSelectedPayMethod('PagoMóvil')}
                    >
                        <Text style={styles.optionText}>PagoMóvil</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[
                            styles.option,
                            selectedPayMethod === 'Efectivo dólares' && styles.selectedOption,
                        ]}
                        onPress={() => setSelectedPayMethod('Efectivo dólares')}
                    >
                        <Text style={styles.optionText}>Efectivo dólares</Text>
                    </TouchableOpacity>
                </View>
                <AppText style={styles.label} text='Número de confirmación de pago' />
                <TextInput
                    style={styles.textInput}
                    secureTextEntry={true}
                    value={confirmationNum}
                    onChangeText={(confirmationNum) => setConfirmationNum(confirmationNum)}
                    color={'white'}
                />
                <RoundedButton onPress={checkFields} text="Ingresar" color="#82c7a5" colorText="#1b212c" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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
    content: {
        padding: 20,
    },
    // container: {
    //     padding: 20,
    //     flex: 1,
    //     backgroundColor: '#fff',
    // },
    label: {
        fontSize: 16,
        marginBottom: 8,
        color: '#fff'
    },
    textInput: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#364058',
        padding: 8,
        fontSize: 16,
        marginBottom: 20,
    },
    backButton: {
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        color: '#fff'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    option: {
        paddingHorizontal: 16,
        paddingVertical: 12,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        backgroundColor: 'white',
    },
    optionText: {
        fontSize: 16,
    },
    selectedOption: {
        backgroundColor: 'blue',
    },
})

export default Pay;
