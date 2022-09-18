import React from "react";
import classes from './AboutMe.module.css'

import Paragraph from '../../components/UI/texts/Paragraph'
import AddButton from '../../components/UI/buttons/AddButton'
import DeleteButton from '../../components/UI/buttons/DeleteButton'
import EditButton from '../../components/UI/buttons/EditButton'
import HeaderText from '../../components/UI/texts/HeaderText'
import Anchor from '../../components/UI/texts/Anchor'
import InputText from '../../components/UI/inputs/InputText'

function AboutMe() {

    return (
        <div className={classes.aboutMe}>
            <HeaderText>Обо мне</HeaderText>
            
            <Paragraph>Определяет текстовый абзац <AddButton>Добавить</AddButton> Тег является <Anchor href="#">Парама цыамыа</Anchor> блочным элементом <DeleteButton>Удалить</DeleteButton> всегда начинается с новой строки, абзацы текста идущие друг за другом разделяются между собой отбивкой <EditButton>Изменить</EditButton> Величиной отбивки можно управлять с помощью стилей. Если закрывающего тега нет, считается, что конец абзаца совпадает с началом следующего блочного элемента.</Paragraph>
            <InputText />
        </div>
    )

}

export default AboutMe;