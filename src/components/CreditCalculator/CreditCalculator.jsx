import React from 'react';
import CreditCalculatorForm from './CreditCalculatorForm'

import HeaderText from '../../components/UI/texts/HeaderText'
import Paragraph from '../../components/UI/texts/Paragraph'

function CreditCalculator() {

    return (
        <div>
            <HeaderText>Кредитный калькулятор</HeaderText>
            <Paragraph>Ниже введите данные, для подсчета ежемесячного платежа кредита</Paragraph>
            <CreditCalculatorForm />
        </div>
    )

}

export default CreditCalculator;