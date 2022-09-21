import { useState } from "react";
import classes from './InputText.module.css'
import AddButton from '../buttons/AddButton'

function InputText({ addTask }) {

    const [userInput, setUserInput] = useState('')
    
    function handleChange(e) {
        setUserInput(e.currentTarget.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        addTask(userInput)
        setUserInput('')
    }

    function handleKeyPress(e) {
        if (e.key === 'Enter') {
            handleSubmit(e)
        }
    }

    return (
        <form className={classes.inputText} onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Введите значение..." 
                value={userInput} 
                onChange={handleChange}
                onKeyDown={handleKeyPress}
            />
            <label htmlFor="galaxy">Город</label>
            <AddButton>Добавить</AddButton>
        </form>
    )

}

export default InputText;