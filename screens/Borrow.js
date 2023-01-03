import React from 'react';
import { View, Text } from 'react-native';
import AmountSlider from '../components/AmountSlider';
import RoundedButton from '../components/RoundedButton';
import TimeButtons from '../components/TimeButtons';

const Borrow = () => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.header}></View>
                <Text style={styles.firstText}>¿Cuánto dinero necesitas?</Text>
                <AmountSlider></AmountSlider>
                <Text style={styles.secondText}>¿En cuánto tiempo pagarás el préstamo total?</Text>
                <TimeButtons text1={'1 semana'} text2={'2 semanas'} text3={'1 mes'}></TimeButtons>
                <Text style={styles.secondText}>¿En cuántas cuotas deseas fraccionar tu préstamo?</Text>
                <TimeButtons style={styles.buttons} text1={'1 cuota'} text2={'2 cuotas'} text3={'4 cuotas'}></TimeButtons>
                <Text style={styles.secondText}>El monto total de tu cuota es</Text>
                <Text style={styles.thirdText}>$60.88</Text>
                <Text style={styles.secondText}>Pagarás en total</Text>
                <Text style={styles.thirdText}>$121.75</Text>
                <View style={{ marginTop: 20 }}>
                    <RoundedButton onPress={null} text="Pedir Prestamo" color="#66BB6A" colorText="#fff" />
                </View>
            </View>
        </View>
    );
};

const styles = {
    container: {
        flex: 1,
    },
    header: {
        height: '10%',
    },
    firstText: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    secondText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    thirdText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingBottom: 15,
        color: '#66BB6A'
    },
    content: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20
    },
};

export default Borrow;
