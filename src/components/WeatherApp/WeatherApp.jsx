import { useState, useEffect } from 'react';
import classes from './WeatherApp.module.css'

import HeaderText from '../../components/UI/texts/HeaderText'
import Paragraph from '../../components/UI/texts/Paragraph'
import CautionText from '../../components/UI/texts/CautionText'
import WeatherForm from './WeatherForm'
import WeatherList from './WeatherList'

function WeatherApp() {

    const [countryList, setcountryList] = useState('...');
    const [selectedCity, setSelectedCity] = useState('...');
    const [temperature, setTemperature] = useState('...');
    const [feelsLikeTemperature, setFeelsLikeTemperature] = useState('...');
    const [pressure, setPressure] = useState('...');
    const [humidity, setHumidity] = useState('...');
    const [windSpeed, setWindSpeed] = useState('...');
    const [weatherDescription, setWeatherDescription] = useState('...');
    const [weatherIcon, setWeatherIcon] = useState('...');
    const [cityValue, setSityValue] = useState('');

    let cityDefault = 'Moscow';
    const apiKey = '0489a7246fa2a2ee031b7a968af86b25';

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

    useEffect(() => {
        weatherSearch();
    }, []);

    function handleCityChange(cityValue) {
        setSityValue(cityValue);
    }

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
            <WeatherForm 
                onChange={handleCityChange} 
                citySearchBtnClick={() => {
                    cityDefault = cityValue;
                    weatherSearch();
                }}
            />
            <WeatherList 
                countryList={countryList}
                selectedCity={selectedCity}
                temperature={temperature}
                feelsLikeTemperature={feelsLikeTemperature}
                pressure={pressure}
                humidity={humidity}
                windSpeed={windSpeed}
                weatherDescription={weatherDescription}
                weatherIcon={weatherIcon}
            />
        </div>
    )

}

export default WeatherApp;