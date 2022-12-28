import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to the Digital Lending App!</Text>
            <Text style={styles.message}>
                Thank you for choosing our app to manage your loans.
            </Text>
            <Button
                title="Continue"
                onPress={() => {
                    navigation.navigate('Home');
                }}
                buttonStyle={styles.button}
                titleStyle={styles.buttonTitle}
            />
        </View>
    );
};

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    message: {
        fontSize: 18,
        margin: 20,
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#0076FF',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 20,
    },
    buttonTitle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
};

export default WelcomeScreen;
