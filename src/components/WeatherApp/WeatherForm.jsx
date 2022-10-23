import React from "react";
import classes from './WeatherApp.module.css'
import AddButton from '../UI/buttons/AddButton'
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
            <AddButton onClick={citySearchBtnClick}>Узнать</AddButton>
        </form>
    )

}

export default WeatherForm;