import React from 'react';
import { View } from 'react-native';
import RoundedButton from '../components/RoundedButton';
import AppText from '../components/AppText';

export default class WelcomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            isReady: false,
        }
    }

    // async componentWillMount() {
    //     await Expo.Font.loadAsync({
    //         'Poppins': require('../assets/Poppins/Poppins-Black.ttf'),
    //     });
    //     this.setState({ isReady: true })
    // }

    // async componentDidMount() {
    //     await Font.loadAsync({
    //         'Poppins': require('../assets/Poppins/Poppins-Black.ttf'),
    //     });
    //     this.setState({ isReady: true })
    // }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <AppText style={styles.title} text='Krece' />
                    <AppText style={styles.message} text='Pide tu prestamo en 4 simples pasos ->' />
                </View>
                <RoundedButton
                    text="Crear una cuenta"
                    color="#82c7a5"
                    colorText="#1b212c"
                    onPress={() => {
                        this.props.navigation.navigate('Signup');
                    }}
                />
                <RoundedButton
                    text="Ya tengo cuenta"
                    color="#1b212c"
                    colorText="#82c7a5"
                    onPress={() => {
                        this.props.navigation.navigate('Login');
                    }}
                />
            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#1b212c',
        paddingHorizontal: 20
    },
    content: {
        height: '75%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'Poppins',
        color: '#fff'
    },
    message: {
        fontSize: 18,
        marginBottom: 10,
        marginTop: 5,
        textAlign: 'center',
        fontFamily: 'Avenir',
        color: '#fff'
    },
};