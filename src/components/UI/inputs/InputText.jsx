import React from "react";
import classes from './InputText.module.css'
import AddButton from '../buttons/AddButton'

function InputText() {

    return (
        <div className={classes.inputText}>
            <input id="galaxy" type="text" placeholder="Введите город" />
            <label htmlFor="galaxy">Город</label>
            <AddButton>Добавить</AddButton>
        </div>
    )

}

export default InputText;