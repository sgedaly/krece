import React, { useEffect, useState, setState } from 'react';
import { View, TouchableOpacity, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import RoundedButton from '../components/RoundedButton';
import AppText from '../components/AppText';
import { useNavigation } from '@react-navigation/native';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import auth from '../auth';



const Login = () => {
    const navigation = useNavigation();
    const [isLoading, setIsLoading] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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

    const signInUser = () => {
        console.log(email)
        console.log(password)
        auth.signInWithEmailAndPassword(email, password)
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
                    <AppText style={styles.title} text='Hola de nuevo 👋' />
                    <Ionicons name="ios-arrow-back" size={32} color="#1b212c" />
                </View>
            </View>
            <View style={styles.content}>
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
                <RoundedButton onPress={checkFields} text="Entrar" color="#82c7a5" colorText="#1b212c" />
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
        backgroundColor: '#fff',
    },
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
    }
})

export default Login;
