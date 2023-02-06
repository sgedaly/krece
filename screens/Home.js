import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import RoundedButton from '../components/RoundedButton';
import AppText from '../components/AppText';
import firestore from '../firestore';
import 'intl';
import 'intl/locale-data/jsonp/es-ES';


const Home = () => {
    const [loading, setLoading] = useState(true);
    const [firstName, setFirstName] = useState('');
    const [amountLeftToPay, setAmountLeftToPay] = useState('');
    const [amountPerInstallment, setAmountPerInstallment] = useState('');
    const [dateString, setDateString] = useState('');
    const [loanActive, setLoanActive] = useState(true);

    useEffect(() => {
        firestore.collection("Users").doc('gedalysamuel@gmail.com')
            .onSnapshot(function (doc) {
                setFirstName(doc.data()['firstName']);
                if (doc.data()['Loan'] != null) {
                    setAmountLeftToPay(doc.data()['Loan'].amountLeftToPay.toFixed(2));
                    setAmountPerInstallment(doc.data()['Loan'].amountPerInstallment.toFixed(2));
                    var installmentDueDate = new Date(doc.data()['Loan'].installmentDueDate.toDate());

                    const date = new Date(installmentDueDate);
                    const options = { month: 'long', day: 'numeric' };
                    const formatter = new Intl.DateTimeFormat('es-ES', options);
                    const dateString = formatter.format(date);
                    setDateString(dateString)
                } else {
                    setLoanActive(false)
                }
                setLoading(false)
            })
    })
    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" />
                <AppText style={styles.loadingText} text='Cargando...' />
            </View>
        );
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <AppText style={styles.helloText} text='Hola,' />
                <AppText style={styles.helloText2} text={firstName} />
            </View>
            <View style={styles.content}>
                <View style={styles.card}>
                    <AppText style={styles.textSmall} text='Cuota actual' />
                    <AppText style={styles.textBig} text={'$' + amountPerInstallment} />
                    <AppText style={styles.textSmall2} text={'Paga antes del ' + dateString} />
                    <View style={styles.lineBorder}>
                        <AppText style={styles.textSmall2} text='Te queda por pagar' />
                        <AppText style={styles.textMedium} text={'$' + amountLeftToPay} />
                    </View>
                    <View style={styles.buttonContainer}>
                        <RoundedButton onPress={null} text="Pagar" color="#1857A3" colorText="#fff" />
                        <RoundedButton onPress={null} text="Ver Detalles" color="#fff" colorText="#1857A3" />
                    </View>
                </View>
                <AppText style={[styles.helloText, { color: '#36454f' }]} text='Historial' />
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
        backgroundColor: '#1857A3', // 8BC34A, 4CAF50, 9CCC65, A5D6A7
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
        fontFamily: 'Avenir'
    },
    helloText2: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        paddingLeft: 10,
        paddingBottom: 10,
        fontFamily: 'Avenir'
    },
    textSmall: {
        fontSize: 14,
        color: '#36454f',
        fontFamily: 'Avenir'
    },
    textSmall2: {
        fontSize: 12,
        color: '#36454f',
        fontFamily: 'Avenir'
    },
    textMedium: {
        fontSize: 14,
        fontWeight: '800',
        color: '#1857A3',
        fontFamily: 'Avenir'
    },
    textBig: {
        fontSize: 32,
        fontWeight: '800',
        color: '#1857A3',
        paddingBottom: 1,
        paddingTop: 10,
        fontFamily: 'Avenir'
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
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loadingText: {
        fontSize: 18,
        marginTop: 20,
    },
};

export default Home;
