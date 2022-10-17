import React from 'react';

import Paragraph from '../../components/UI/texts/Paragraph'
import ImportantText from '../../components/UI/texts/ImportantText'

function WeatherList(props) {

    return (
        <div>
            <Paragraph>Страна: <ImportantText>{props.countryList}</ImportantText></Paragraph>
            <Paragraph>Город: <ImportantText>{props.selectedCity}</ImportantText></Paragraph>
            <Paragraph>Температура: <ImportantText>{props.temperature}&deg;</ImportantText></Paragraph>
            <Paragraph>Ощущается как: <ImportantText>{props.feelsLikeTemperature}&deg;</ImportantText></Paragraph>
            <Paragraph>Давление: <ImportantText>{props.pressure} бар</ImportantText></Paragraph>
            <Paragraph>Влажность: <ImportantText>{props.humidity} %</ImportantText></Paragraph>
            <Paragraph>Скорость ветра: <ImportantText>{props.windSpeed} м/с</ImportantText></Paragraph>
            <Paragraph>Описание погоды: <ImportantText>{props.weatherDescription}</ImportantText></Paragraph>
            <Paragraph>Иконка погоды: <img src={props.weatherIcon} alt="Иконка погоды" style={{height: '25px'}}/></Paragraph>
        </div>
    )

}

export default WeatherList;