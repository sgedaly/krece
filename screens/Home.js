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

    const [payments, setPayments] = useState([]);

    const formatDate = (timestamp) => {
        const date = timestamp.toDate(); // Convert Firestore timestamp to JavaScript Date object
        const month = date.toLocaleDateString('es-ES', { month: 'short' }); // Get the short month name
        const day = date.getDate(); // Get the day of the month
        return `${day} de ${month.charAt(0).toUpperCase() + month.slice(1)}`;
    };

    useEffect(() => {
        firestore.collection("Users").doc('gedalysamuel@gmail.com')
            .onSnapshot(async (doc) => {
                setFirstName(doc.data()['firstName']);
                if (doc.data()['payments'] != null) {
                    const paymentDetails = doc.data()['payments'].map((paymentRef) => {
                        return new Promise((resolve, reject) => {
                            firestore.collection("Payments").doc(paymentRef).get().then((doc) => {
                                if (doc.exists) {
                                    resolve(doc.data())
                                } else {
                                    resolve(null)
                                }
                            })
                        })
                    })
                    Promise.all(paymentDetails).then((results) => {
                        setPayments(results)

                    })
                } else {
                    // setLoanActive(false)
                }
                setLoading(false)
            })
    }, []);
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
                {payments.length !== 0 ? (<View style={styles.card}>
                    <AppText style={styles.textSmall} text="Pagos" />
                    {payments.map((item, index) => (
                        <View key={index} style={styles.paymentItem}>
                            <AppText style={styles.textSmall2} text={formatDate(item.dueDate)} />
                            <AppText style={styles.textSmall2} text={item.paid ? "pagado" : ""} />
                            <AppText style={styles.textSmall2} text={"$" + item.actualAmount} />
                        </View>
                    ))}
                    <View style={styles.paymentItem}>
                        <AppText style={styles.textSmall} text="Saldo restante" />
                        <AppText style={styles.textSmall} text={"$" + 34} />
                    </View>
                    <View style={styles.buttonContainer}>
                        <RoundedButton onPress={null} text="Pagar" color="#1b212c" colorText="#82c7a5" />
                        <RoundedButton onPress={null} text="Ver Detalles" color="#82c7a5" colorText="#1b212c" />
                    </View>
                </View>) : (
                    <View style={styles.card}>
                        <AppText style={styles.textSmall2} text="No tienes celular financiado por Krece. Dirigete a una de nuestras tiendas afiliadas cuando necesites renovar tu celular." />
                    </View>
                )}
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
        backgroundColor: '#1b212c', // 8BC34A, 4CAF50, 9CCC65, A5D6A7
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
        fontSize: 16,
        color: '#1b212c',
        fontWeight: 'bold'
    },
    textSmall2: {
        fontSize: 12,
        color: '#1b212c',
    },
    textMedium: {
        fontSize: 14,
        fontWeight: '800',
        color: '#0145ac',
    },
    textBig: {
        fontSize: 32,
        fontWeight: '800',
        color: '#0145ac',
        paddingBottom: 1,
        paddingTop: 10,
    },
    content: {
        flex: 1,
        backgroundColor: '#1b212c',
        padding: 15,
    },
    card: {
        backgroundColor: '#82c7a5',
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
    paymentItem: {
        width: '100%',
        paddingTop: 5,
        paddingBottom: 10,
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 10,
    }
};

export default Home;
