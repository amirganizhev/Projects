import { useState } from 'react';
import classes from './CreditCalculatorForm.module.css'

import InputText from '../UI/inputs/InputText'

function CreditCalculatorForm() {

    const [creditAmount, setCreditAmount] = useState('');
    const [creditTerm, setCreditTerm] = useState('');
    const [creditPercent, setCreditPercent] = useState('');

    function paymentCalculation(e) {
        e.preventDefault();
        let totalAmount = creditAmount + (((creditAmount / 100) * (creditTerm / 12)) * (creditPercent * 12));
        let monthlyPayment = totalAmount / (creditTerm * 12);
        alert(`
            Общая сумма к возврату: ${Math.round(totalAmount)} рублей
            Ежемесячный платеж: ${Math.round(monthlyPayment)} рублей
        `);
        setCreditAmount('');
        setCreditTerm('');
        setCreditPercent('');
    }

    function creditAmountOnChange(e) {
        setCreditAmount(e.target.value)
    }

    function creditTermOnChange(e) {
        setCreditTerm(e.target.value)
    }

    function creditPercentOnChange(e) {
        setCreditPercent(e.target.value)
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
            <button className="addButton">
                <span>Подсчитать</span>
            </button>
        </form>
    )

}

export default CreditCalculatorForm;