import { useState } from 'react';
import classes from './ModalWindow.module.css'

import HeaderText from '../../components/UI/texts/HeaderText'
import Paragraph from '../../components/UI/texts/Paragraph'
import CautionText from '../../components/UI/texts/CautionText'

function ModalWindow() {

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <div className={classes.modalWindowBlock}>
            <HeaderText>Модальное окно</HeaderText>
            <Paragraph>Нажмите на кнопку ниже, чтобы вызвать модальное окно</Paragraph>
            <div>
                <button onClick={() => {setModalVisible(true)}} className="addButton">
                    <span>Показать окно</span>
                </button>
                {modalVisible === true && 
                    <div className={classes.modalWindow}>
                        <div>
                            <Paragraph><CautionText>Это просто модальное окно, закройте его, нажав кнопку "Закрыть" ниже</CautionText></Paragraph>
                            <button onClick={() => {setModalVisible(false)}} className="deleteButton">
                                <span>Закрыть</span>
                            </button>
                        </div>
                    </div>
                }
            </div>
        </div>
    )

}

export default ModalWindow;