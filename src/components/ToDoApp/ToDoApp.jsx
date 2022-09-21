import { useState } from 'react';
import classes from './ToDoApp.module.css'

import HeaderText from '../../components/UI/texts/HeaderText'
import Paragraph from '../../components/UI/texts/Paragraph'
import InputText from '../../components/UI/inputs/InputText'
import ToDo from './ToDo'

function ToDoApp() {

    const [todos, setTodos] = useState([])

    function addTask(userInput) {
        if (userInput) {
            const newItem = {
                id: Math.random().toString(36).substr(2,9),
                task: userInput,
                complete: false
            }
            setTodos([...todos, newItem])
        }
    }

    function removeTask(id) {
        setTodos([...todos.filter((todo) => todo.id !== id)])
    }

    function handleToogle(id) {
        setTodos([
            ...todos.map((todo) => 
                todo.id === id ? {...todo, complete: !todo.complete} : { ...todo }
            )
        ])
    }

    return (
        <div className={classes.toDoApp}>
            <HeaderText>ToDo приложение</HeaderText>
            <Paragraph>Количество задач: {todos.length}</Paragraph>
            <InputText addTask={addTask} />
            {todos.map((todo) => {
                return (
                    <ToDo 
                        todo={todo}
                        key={todo.id}
                        toogleTask={handleToogle}
                        removeTask={removeTask}
                    />
                )
            })}
        </div>
    )

}

export default ToDoApp;