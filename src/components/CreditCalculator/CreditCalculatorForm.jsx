import { useState } from 'react';
import classes from './CreditCalculatorForm.module.css'

import InputText from '../UI/inputs/InputText'
import Paragraph from '../../components/UI/texts/Paragraph'
import ImportantText from '../../components/UI/texts/ImportantText'

function CreditCalculatorForm() {

    const [creditAmount, setCreditAmount] = useState('');
    const [creditTerm, setCreditTerm] = useState('');
    const [creditPercent, setCreditPercent] = useState('');
    const [totalAmountInner, setTotalAmountInner] = useState(0);
    const [monthlyPaymentInner, setMonthlyPaymentInner] = useState(0);

    function paymentCalculation(e) {
        e.preventDefault();
        let totalAmount = creditAmount + (((creditAmount / 100) * (creditTerm / 12)) * (creditPercent * 12));
        let monthlyPayment = totalAmount / (creditTerm * 12);
        setTotalAmountInner(Math.round(totalAmount));
        setMonthlyPaymentInner(Math.round(monthlyPayment));
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
            <Paragraph>Общая сумма к возврату: <ImportantText>{totalAmountInner} рублей</ImportantText></Paragraph>
            <Paragraph>Ежемесячный платеж: <ImportantText>{monthlyPaymentInner} рублей</ImportantText></Paragraph>
        </form>
    )

}

export default CreditCalculatorForm;