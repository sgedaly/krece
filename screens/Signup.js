import React from 'react';
import { View, TouchableOpacity, Text, TextInput, StyleSheet, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import RoundedButton from '../components/RoundedButton';
import AppText from '../components/AppText';

export default class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        }
    }
    componentDidMount() {

    }

    checkFields() {
        if (this.state.firstName !== '' && this.state.lastName !== '' && this.state.email !== '' && this.state.password !== '') {
            //TODO: Check that email is valid and password is strong enough
            this.props.navigation.navigate('Inicio')
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

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.header}>
                    <View style={styles.headerContent}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.goBack()}
                            style={styles.backButton}
                        >
                            <Ionicons name="ios-arrow-back" size={32} color="#999" />
                        </TouchableOpacity>
                        <AppText style={styles.title} text='Crear una cuenta' />
                        <Ionicons name="ios-arrow-back" size={32} color="#fff" />
                    </View>
                </View>
                <View style={styles.content}>
                    <AppText style={styles.label} text='Nombre:' />
                    <TextInput
                        style={styles.textInput}
                        value={this.state.firstName}
                        onChangeText={(firstName) => this.setState({ firstName })}
                    />
                    <AppText style={styles.label} text='Apellidos:' />
                    <TextInput
                        style={styles.textInput}
                        value={this.state.lastName}
                        onChangeText={(lastName) => this.setState({ lastName })}
                    />
                    <AppText style={styles.label} text='Email:' />
                    <TextInput
                        style={styles.textInput}
                        value={this.state.email}
                        onChangeText={(email) => this.setState({ email })}
                    />
                    <AppText style={styles.label} text='Contraseña:' />
                    <TextInput
                        style={styles.textInput}
                        secureTextEntry={true}
                        value={this.state.password}
                        onChangeText={(password) => this.setState({ password })}
                    />
                    <RoundedButton onPress={() => { this.checkFields() }} text="Continuar" color="#1857A3" colorText="#fff" />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        height: '15%',
        borderBottomWidth: 2,
        borderBottomColor: '#f0f0f0',
        backgroundColor: '#fff',
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
        fontFamily: 'Avenir'
    },
    textInput: {
        borderWidth: 2,
        borderColor: '#f0f0f0',
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
        fontFamily: 'Avenir'
    }
})
