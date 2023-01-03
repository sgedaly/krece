import React from 'react';
import { View, Text } from 'react-native';
import RoundedButton from '../components/RoundedButton';

const Home = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.helloText}>Hola,</Text>
                <Text style={styles.helloText2}>Samuel</Text>
            </View>
            {/* <Text style={styles.helloText}>Prestamo</Text> */}
            <View style={styles.content}>
                <View style={styles.card}>
                    <Text style={styles.textSmall}>Cuota actual</Text>
                    <Text style={styles.textBig}>$160.43</Text>
                    <Text style={styles.textSmall2}>Paga antes del 5 de Febrero</Text>
                    <View style={styles.lineBorder}>
                        <Text style={styles.textSmall2}>Te queda por pagar</Text>
                        <Text style={styles.textMedium}>$380.53</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <RoundedButton onPress={null} text="Pagar" color="#66BB6A" colorText="#fff" />
                        <RoundedButton onPress={null} text="Ver Detalles" color="#fff" colorText="#66BB6A" />
                    </View>
                </View>
                <Text style={[styles.helloText, { color: '#36454f' }]}>Historial</Text>
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
        backgroundColor: '#66BB6A', // 8BC34A, 4CAF50, 9CCC65, A5D6A7
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
    },
    lineBorder: {
        borderTopColor: '#f0f0f0',
        borderTopWidth: 2,
        borderBottomColor: '#f0f0f0',
        borderBottomWidth: 2,
        width: '100%',
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 15,
        marginBottom: 15,
        justifyContent: 'space-between',
        flexDirection: 'row',
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
    textSmall: {
        fontSize: 14,
        color: '#36454f'
    },
    textSmall2: {
        fontSize: 12,
        color: '#36454f',
    },
    textMedium: {
        fontSize: 14,
        fontWeight: '800',
        color: '#66BB6A',
    },
    textBig: {
        fontSize: 32,
        fontWeight: '800',
        color: '#66BB6A',
        paddingBottom: 1,
        paddingTop: 10
    },
    content: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 15,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        marginBottom: 10,
        padding: 15,
        alignItems: 'left',
        justifyContent: 'center',
    },
    buttonContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
};

export default Home;
