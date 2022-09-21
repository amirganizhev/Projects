import React from "react";
import classes from './AboutMe.module.css'

import Paragraph from '../../components/UI/texts/Paragraph'
import HeaderText from '../../components/UI/texts/HeaderText'
import Anchor from '../../components/UI/texts/Anchor'

function AboutMe() {

    return (
        <div className={classes.aboutMe}>
            <Paragraph>
                Здравстуйте, меня зовут Амир, данный проект является моим сайтом-визиткой
                и портфолио одновременно. На данной странице, я кратко расскажу о себе и 
                своем опыте работы.
            </Paragraph>
            <HeaderText>Краткая биография</HeaderText>
            <Paragraph>
                Родился 3 апреля 1998 года, полных лет 24. Школу закончил в 2015 году, в 
                этом ж году поступил в университет.
            </Paragraph>
            <HeaderText>Образование</HeaderText>
            <Paragraph>
                Учился в городе Ростов-на-Дону, в <Anchor href="https://rgups.ru/">РГУПС 
                ("Ростовский государственный университет путей сообщения")</Anchor>, 
                факультет "Информационные технологии управления", специальность 
                "Информатика и вычислительная техника". Закончил университет в 2019 году.
            </Paragraph>
            <HeaderText>Опыт работы</HeaderText>
            <Paragraph>
                На первую работу в IT, я устроился 16 ноября 2021 года, в компанию "AVTOBUS1", 
                на должность "Frontent-разработчик". На данный момент работаю там же. <br/>
                Наш стек технологий Backend: C#, .NET <br/>
                Наш стек технологий Frontend: HTML, CSS, JavaScript, JQuery, Kendo UI MVC <br/>
                Список проектов над которыми я работал в компании: <br/>
                1) <Anchor href="https://erp.holdingbp.ru/">Корпоративная ERP-система</Anchor> <br/>
                2) <Anchor href="http://cms.holdingbp.ru/">CMS-система</Anchor> <br/>
                3) Сайт <Anchor href="https://avtobus1.ru/">Avtobus1</Anchor> <br/>
                4) Сайт <Anchor href="https://avtobustrans.ru/">Avtobustrans</Anchor> <br/>
                5) Сайт <Anchor href="#">ZakBus</Anchor> <br/>
                6) Сайт <Anchor href="http://edembus.ru/">EdemBus</Anchor> <br/>
                7) Сайт <Anchor href="#">Charterbus</Anchor> <br/>
                8) Сайт <Anchor href="#">Bus1</Anchor> <br/>
                9) Сайт <Anchor href="https://nazmiev.club/">Nazmiev.club</Anchor>
            </Paragraph>
        </div>
    )

}

export default AboutMe;