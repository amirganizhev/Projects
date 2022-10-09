import { useState } from "react";
import classes from './WeatherApp.module.css'
import AddButton from '../UI/buttons/AddButton'
import InputText from '../UI/inputs/InputText'

function WeatherForm() {

    return (
        <form className={classes.weatherForm} /*onSubmit={handleSubmit}*/>
            <InputText 
                placeholder="Введите город..." 
                label="Узнать погоду в городе" 
                /*
                value={userInput} 
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                */
            />
            <AddButton>Узнать</AddButton>
        </form>
    )

}

export default WeatherForm;