import { useState } from 'react';
import classes from './CreditCalculatorForm.module.css'

import InputText from '../UI/inputs/InputText'
import AddButton from '../UI/buttons/AddButton'

function CreditCalculatorForm() {

    const [creditAmount, setCreditAmount] = useState('');
    const [creditTerm, setCreditTerm] = useState('');
    const [creditPercent, setCreditPercent] = useState('');

    function paymentCalculation(e) {
        e.preventDefault();
        let totalAmount = creditAmount + (((creditAmount / 100) * (creditTerm / 12)) * (creditPercent * 12));
        let monthlyPayment = totalAmount / (creditTerm * 12);
        alert("Общая сумма к возврату: " + Math.round(totalAmount) + " рублей");
	    alert("Ежемесячный платеж: " + Math.round(monthlyPayment) + " рублей");
    }

    function creditAmountOnChange(e) {
        setCreditAmount(e.target.value)
        console.log(creditAmount);
    }

    function creditTermOnChange(e) {
        setCreditTerm(e.target.value)
        console.log(creditTerm);
    }

    function creditPercentOnChange(e) {
        setCreditPercent(e.target.value)
        console.log(creditPercent);
    }

    return (
        <form className={classes.creditCalculatorForm} onSubmit={paymentCalculation}>
            <InputText 
                placeholder="Введите сумму кредита..." 
                label="Сумма кредита"
                value={creditAmount}
                onChange={creditAmountOnChange}
            />
            <InputText 
                placeholder="Введите срок кредита в годах..." 
                label="Срок кредита в годах"
                value={creditTerm}
                onChange={creditTermOnChange}
            />
            <InputText 
                placeholder="Введите процентную ставку..." 
                label="Процентная ставка"
                value={creditPercent}
                onChange={creditPercentOnChange}
            />
            <AddButton>Подсчитать</AddButton>
        </form>
    )

}

export default CreditCalculatorForm;