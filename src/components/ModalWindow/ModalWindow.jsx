import { useState } from 'react';
import classes from './ModalWindow.module.css'

import HeaderText from '../../components/UI/texts/HeaderText'
import Paragraph from '../../components/UI/texts/Paragraph'
import CautionText from '../../components/UI/texts/CautionText'
import AddButton from '../UI/buttons/AddButton'
import DeleteButton from '../UI/buttons/DeleteButton'

function ModalWindow() {

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <div className={classes.modalWindowBlock}>
            <HeaderText>Модальное окно</HeaderText>
            <Paragraph>Нажмите на кнопку ниже, чтобы вызвать модальное окно</Paragraph>
            <div>
                <AddButton onClick={() => {setModalVisible(true)}}>Показать окно {modalVisible}</AddButton>
                {modalVisible === true && 
                    <div className={classes.modalWindow}>
                        <div>
                            <Paragraph><CautionText>Это просто модальное окно, закройте его, нажав кнопку "Закрыть" ниже</CautionText></Paragraph>
                            <DeleteButton onClick={() => {setModalVisible(false)}}>Закрыть</DeleteButton>
                        </div>
                    </div>
                }
            </div>
        </div>
    )

}

export default ModalWindow;