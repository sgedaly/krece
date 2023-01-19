import React, { useEffect, useState, setState } from 'react';
import { View, ActivityIndicator, Alert } from 'react-native';
import AmountSlider from '../components/AmountSlider';
import RoundedButton from '../components/RoundedButton';
import TimeButtons from '../components/TimeButtons';
import AppText from '../components/AppText';
import firestore from '../firestore';
import { useNavigation } from '@react-navigation/native';



const Borrow = () => {
    const navigation = useNavigation();

    const [loading, setLoading] = useState(true);
    const [maxValue, setMaxValue] = useState(0);
    const [minValue, setMinValue] = useState(0);
    const [creditScore, setCreditScore] = useState(0);
    const [interestRatePerMonth, setInterestRatePerMonth] = useState(0);
    const [adjustedInterestRate, setAdjustedInterestRate] = useState(0);
    const [loanRequested, setLoanRequested] = useState(0);
    const [installmentAmount, setInstallmentAmount] = useState('--');
    const [numberOfInstallments, setNumberOfInstallments] = useState(4);
    const [totalAmountToPay, setTotalAmountToPay] = useState('--');
    const [loanDurationInMonths, setLoanDurationInMonths] = useState(1);
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [buttonColor, setButtonColor] = useState('#D3E2D5');



    const calculateAmounts = (loanAmount) => {
        setLoanRequested(loanAmount)
        var totalAmount = ((loanAmount * interestRatePerMonth) + loanAmount).toFixed(2)
        setTotalAmountToPay(totalAmount)
        setInstallmentAmount((totalAmount / numberOfInstallments).toFixed(2))
        setButtonDisabled(false)
        setButtonColor('#66BB6A')
    }

    useEffect(() => {
        const ref = firestore.collection("Users").doc('gedalysamuel@gmail.com')
        ref.onSnapshot(doc => {
            var iR = doc.data()['interestRate']
            setInterestRatePerMonth(iR);
            setAdjustedInterestRate(iR * loanDurationInMonths)
            setMaxValue(doc.data()['creditLimit'].toFixed(2));
            setMinValue(50.00);
            setLoanRequested(50.00);
            setLoading(false);
        })
    }, [])
    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" />
                <AppText style={styles.loadingText} text='Cargando...' />
            </View>
        );
    }
    const onButtonsPressedChangeInstallments = (numberOfInstallments) => {
        setNumberOfInstallments(numberOfInstallments)
        var totalAmount = ((loanRequested * adjustedInterestRate) + loanRequested).toFixed(2)
        setTotalAmountToPay(totalAmount)
        setInstallmentAmount((totalAmount / numberOfInstallments).toFixed(2))
        setButtonDisabled(false)
        setButtonColor('#66BB6A')
    }
    const onButtonsPressedChangeInterestRate = (loanDurationInMonths) => {
        setLoanDurationInMonths(loanDurationInMonths)
        var adjustedInterestRate = interestRatePerMonth * loanDurationInMonths
        setAdjustedInterestRate(adjustedInterestRate)
        var totalAmount = ((loanRequested * adjustedInterestRate) + loanRequested).toFixed(2)
        setTotalAmountToPay(totalAmount)
        setInstallmentAmount((totalAmount / numberOfInstallments).toFixed(2))
        setButtonDisabled(false)
        setButtonColor('#66BB6A')
    }
    const submitLoan = () => {
        Alert.alert(
            'Pedido de préstamo',
            'Deseas enviar este pedido de prestamo?',
            [
                { text: 'No', onPress: () => null },
                { text: 'Si', onPress: () => navigation.navigate('Inicio') }, // TODO: navigate to personal information page
            ],
            { cancelable: false },
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.header}></View>
                <AppText style={styles.firstText} text='¿Cuánto dinero necesitas?' />
                <AmountSlider minValue={minValue} maxValue={maxValue} onChange={calculateAmounts} />
                <AppText style={styles.secondText} text='¿En cuánto tiempo pagarás el préstamo total?' />
                <TimeButtons text1={'1 semana'} text2={'2 semanas'} text3={'1 mes'} type='time' onChange={onButtonsPressedChangeInterestRate} />
                <AppText style={styles.secondText} text='¿En cuántas cuotas deseas fraccionar tu préstamo?' />
                <TimeButtons style={styles.buttons} text1={'1 cuota'} text2={'2 cuotas'} text3={'4 cuotas'} type='installments' onChange={onButtonsPressedChangeInstallments} />
                <AppText style={styles.secondText} text='El monto total de tu cuota es' />
                <AppText style={styles.thirdText} text={'$' + installmentAmount} />
                <AppText style={styles.secondText} text='Pagarás en total' />
                <AppText style={styles.thirdText} text={'$' + totalAmountToPay} />
                <View>
                    <RoundedButton onPress={submitLoan} text="Pedir Prestamo" color={buttonColor} colorText="#fff" disabled={buttonDisabled} />
                </View>
            </View>
        </View >
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
        color: '#66BB6A',
    },
    content: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20
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

export default Borrow;
