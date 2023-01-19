import React from 'react';
import { View, TouchableOpacity, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import RoundedButton from '../components/RoundedButton';
import AppText from '../components/AppText';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            email: '',
            password: ''
        }
    }
    componentDidMount() {

    }

    checkFields() {
        if (this.state.email !== '' && this.state.password !== '') {
            //TODO: Check that email and password match
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
                        <AppText style={styles.title} text='Hola de nuevo 👋' />
                        <Ionicons name="ios-arrow-back" size={32} color="#fff" />
                    </View>
                </View>
                <View style={styles.content}>
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
                    <RoundedButton onPress={() => { this.checkFields() }} text="Entrar" color="#66BB6A" colorText="#fff" />
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
