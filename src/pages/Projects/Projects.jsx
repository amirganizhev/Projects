import React from "react";
import classes from './Projects.module.css'
import Paragraph from '../../components/UI/texts/Paragraph'
import ToDoApp from "../../components/ToDoApp/ToDoApp";
import WeatherApp from "../../components/WeatherApp/WeatherApp";
import Counter from "../../components/Counter/Counter";
import ModalWindow from "../../components/ModalWindow/ModalWindow";
import CreditCalculator from "../../components/CreditCalculator/CreditCalculator";

function Projects() {

    return (
        <div className={classes.projects}>
            <Paragraph>
                На данной странице, ниже я всталять различные проекты 
                написанные на библиотеке React JS, они будут расположены 
                друг за другом, по вертикали через белую черту. Структура
                следующая: <br/>
                1) название проекта в заголовке, <br/>
                2) сам проет, <br/>
                3) белая черта, отделяющая данный проект от следующих.
            </Paragraph>
            <hr />
            <ToDoApp />
            <hr />
            <WeatherApp />
            <hr />
            <CreditCalculator />
            <hr />
            <ModalWindow />
            <hr />
            <Counter />
        </div>
    )

}

export default Projects;