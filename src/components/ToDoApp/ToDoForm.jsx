import { useState } from "react";
import classes from './ToDoApp.module.css'
import AddButton from '../UI/buttons/AddButton'
import InputText from '../UI/inputs/InputText'

function ToDoForm({ addTask }) {

    const [userInput, setUserInput] = useState('')
    
    function handleChange(e) {
        setUserInput(e.currentTarget.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        addTask(userInput)
    }

    function handleKeyPress(e) {
        if (e.key === 'Enter') {
            handleSubmit(e)
        }
    }

    return (
        <form className={classes.toDoForm} onSubmit={handleSubmit}>
            <InputText 
                placeholder="Введите задачу..." 
                label="Добавить задачу" 
                value={userInput} 
                onChange={handleChange}
                onKeyDown={handleKeyPress}
            />
            <AddButton>Добавить</AddButton>
        </form>
    )

}

export default ToDoForm;