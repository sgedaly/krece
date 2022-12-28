import React from 'react';
import { View, Text } from 'react-native';

const Borrow = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.helloText}>Hola,</Text>
                <Text style={styles.helloText2}>Samuel</Text>
            </View>
            <View style={styles.content}>
                {/* Add content for the screen here */}
            </View>
        </View>
    );
};

const styles = {
    container: {
        flex: 1,
    },
    header: {
        height: '25%',
        backgroundColor: '#66BB6A',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        padding: 20,
    },
    helloText: {
        fontSize: 24,
        color: '#fff',
        paddingLeft: 10,
    },
    helloText2: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        paddingLeft: 10,
        paddingBottom: 10,
    },
    content: {
        flex: 1,
        backgroundColor: '#fff',
    },
};

export default Borrow;
