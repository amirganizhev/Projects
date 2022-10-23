import React from "react";
import classes from './WeatherApp.module.css'
import InputText from '../UI/inputs/InputText'

function WeatherForm({citySearchBtnClick, onChange}) {

    function handleCityChange(e) {
        onChange(e.target.value);
    }

    return (
        <form className={classes.weatherForm} onSubmit={(e) => e.preventDefault()}>
            <InputText 
                placeholder="Введите город..."
                onChange={handleCityChange}
            />
            <button onClick={citySearchBtnClick} className="addButton">
                <span>Узнать</span>
            </button>
        </form>
    )

}

export default WeatherForm;