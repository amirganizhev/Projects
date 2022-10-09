import React from 'react';
import classes from './WeatherApp.module.css'

import HeaderText from '../../components/UI/texts/HeaderText'
import Paragraph from '../../components/UI/texts/Paragraph'
import CautionText from '../../components/UI/texts/CautionText'
import WeatherForm from './WeatherForm'
import WeatherList from './WeatherList'

function WeatherApp() {

    return (
        <div className={classes.weatherApp}>
            <HeaderText>Погодное приложение</HeaderText>
            <Paragraph>
                Нужно ввести в форму название города, нажать на кпонку "Искать", и ниже будет 
                отображенна погода в данном городе. По умолчанию стоит погода города под названием 
                Москва <CautionText>(Внимание, иногда приложение может не выдавать результат, так как 
                я использовал бесплатную версию погодного API, а у него есть ограничения по количеству 
                запросов.)</CautionText>
            </Paragraph>
            <WeatherForm />
            <WeatherList />
        </div>
    )

}

export default WeatherApp;