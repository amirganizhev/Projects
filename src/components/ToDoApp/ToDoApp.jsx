import { useState } from 'react';
import classes from './ToDoApp.module.css'

import HeaderText from '../../components/UI/texts/HeaderText'
import Paragraph from '../../components/UI/texts/Paragraph'
import ToDoForm from './ToDoForm'
import ToDo from './ToDo'

function ToDoApp() {

    const [todos, setTodos] = useState([])

    function addTask(userInput) {
        if (userInput) {
            const newItem = {
                id: Math.random().toString(36).substr(2,9),
                task: userInput
            }
            setTodos([...todos, newItem])
        }
    }

    function removeTask(id) {
        setTodos([...todos.filter((todo) => todo.id !== id)])
    }

    return (
        <div className={classes.toDoApp}>
            <HeaderText>ToDo приложение</HeaderText>
            <Paragraph>Количество задач: {todos.length}</Paragraph>
            <ToDoForm addTask={addTask} />
            {todos.map((todo) => {
                return (
                    <ToDo 
                        todo={todo}
                        key={todo.id}
                        removeTask={removeTask}
                    />
                )
            })}
        </div>
    )

}

export default ToDoApp;