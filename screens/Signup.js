import React, { useEffect, useState, setState } from 'react';
import { View, TouchableOpacity, Text, TextInput, StyleSheet, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import RoundedButton from '../components/RoundedButton';
import AppText from '../components/AppText';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import auth from '../auth';

const Signup = () => {
    const navigation = useNavigation();
    const [isLoading, setIsLoading] = useState(true);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [selectedCountry, setSelectedCountry] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const checkFields = () => {
        if (firstName !== '' && lastName !== '' && email !== '' && password !== '' && phoneNumber !== '') {
            //TODO: Check that email is valid and password is strong enough
            signUpUser()
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

    const signUpUser = () => {
        console.log(email)
        console.log(password)
        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                navigation.navigate('Inicio')
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
                // ..
            });
    }
    //TODO: Quitar nombre y apellido de aqui y ponerlo una vez que se haga signup y se le comience a hacer las preguntas
    //TODO: Add some border to text inputs
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
                    <AppText style={styles.title} text='Crear una cuenta' />
                    <Ionicons name="ios-arrow-back" size={32} color="#1b212c" />
                </View>
            </View>
            <View style={styles.content}>
                <AppText style={styles.label} text='Nombre:' />
                <TextInput
                    style={styles.textInput}
                    value={firstName}
                    onChangeText={(firstName) => setFirstName(firstName)}
                    color={'white'}
                />
                <AppText style={styles.label} text='Apellidos:' />
                <TextInput
                    style={styles.textInput}
                    value={lastName}
                    onChangeText={(lastName) => setLastName(lastName)}
                    color={'white'}
                />
                <AppText style={styles.label} text='Número de teléfono:' />
                <View style={styles.phoneNumberContainer}>
                    <View style={styles.pickerContainer}>
                        <Picker
                            selectedValue={selectedCountry}
                            onValueChange={(selectedCountry) => setSelectedCountry(selectedCountry)}
                            color={'white'}
                            style={styles.pickerStyle}
                        >
                            <Picker.Item label="+58" value="+58" />
                            {/* add more countries here */}
                        </Picker>
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.textInput}
                            keyboardType="numeric"
                            value={phoneNumber}
                            onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
                            color={'white'}
                        />
                    </View>
                </View>
                <AppText style={styles.label} text='Email:' />
                <TextInput
                    style={styles.textInput}
                    value={email}
                    onChangeText={(email) => setEmail(email)}
                    color={'white'}
                />
                <AppText style={styles.label} text='Contraseña:' />
                <TextInput
                    style={styles.textInput}
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(password) => setPassword(password)}
                    color={'white'}
                />
                <RoundedButton onPress={checkFields} text="Continuar" color="#82c7a5" colorText="#1b212c" />
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
    container: {
        padding: 20,
        flex: 1,
        backgroundColor: '#1b212c',
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
        fontFamily: 'Avenir',
        color: '#fff'
    },
    textInput: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#364058',
        padding: 8,
        fontSize: 16,
        marginBottom: 20,
        fontFamily: 'Avenir'
    },
    backButton: {
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        fontFamily: 'Avenir',
        color: '#fff'
    },
    pickerContainer: {
        flex: 1,
    },
    inputContainer: {
        flex: 2,
    },
    phoneNumberContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        maxHeight: 80
    },
    pickerStyle: {
        color: '#fff',
        padding: 8,
        marginBottom: 20,
        width: 120
    }
})

export default Signup;