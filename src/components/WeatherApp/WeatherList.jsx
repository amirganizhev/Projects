import {useState} from 'react';

import Paragraph from '../../components/UI/texts/Paragraph'

function WeatherList() {

    const [countryList, setcountryList] = useState('...');
    const [selectedCity, setSelectedCity] = useState('...');
    const [temperature, setTemperature] = useState('...');
    const [feelsLikeTemperature, setFeelsLikeTemperature] = useState('...');
    const [pressure, setPressure] = useState('...');
    const [humidity, setHumidity] = useState('...');
    const [windSpeed, setWindSpeed] = useState('...');
    const [weatherDescription, setWeatherDescription] = useState('...');
    const [weatherIcon, setWeatherIcon] = useState('...');

    const apiKey = '0489a7246fa2a2ee031b7a968af86b25';
    const cityDefault = "Moscow";

    function weatherSearch() {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityDefault}&appid=${apiKey}`)
        /*Преобразует строку в массив*/
        .then(function (response) {
            return response.json();
        })
        /*Что выводить*/
        .then(function (data) {
            setcountryList(data.sys.country);
            setSelectedCity(data.name);
            setTemperature(Math.round(data.main.temp - 273));
            setFeelsLikeTemperature(Math.round(data.main.feels_like - 273));
            setPressure(data.main.pressure);
            setHumidity(data.main.humidity);
            setWindSpeed(data.wind.speed);
            setWeatherDescription(data.weather[0]['description']);
            setWeatherIcon(`https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png`);
        })
        /*Обработка ошибок*/
        .catch(function () {
            alert('Данного города нет в нашем списке')
        }) 
    }
    
    weatherSearch();

    return (
        <div>
            <Paragraph>Страна: {countryList}</Paragraph>
            <Paragraph>Город: {selectedCity}</Paragraph>
            <Paragraph>Температура: {temperature}&deg;</Paragraph>
            <Paragraph>Ощущается как: {feelsLikeTemperature}&deg;</Paragraph>
            <Paragraph>Давление: {pressure} бар</Paragraph>
            <Paragraph>Влажность: {humidity} %</Paragraph>
            <Paragraph>Скорость ветра: {windSpeed} м/с</Paragraph>
            <Paragraph>Описание погоды: {weatherDescription}</Paragraph>
            <Paragraph>Иконка погоды: <img src={weatherIcon} alt="Иконка погоды" style={{height: '25px'}}/></Paragraph>
        </div>
    )

}

export default WeatherList;