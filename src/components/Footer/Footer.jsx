import React from "react";
import classes from './Footer.module.css'
import HeaderText from '../../components/UI/texts/HeaderText'
import VkIcon from '../../images/social-networks/vk.svg';
import TelegramIcon from '../../images/social-networks/telegram.svg';
import EmailIcon from '../../images/social-networks/mail.svg';
import GithubIcon from '../../images/social-networks/github.svg';

function AboutMe() {

    return (
        <div className={classes.footer}>
            <HeaderText>Мои контакты</HeaderText>
            <div>
                <a href="https://vk.com/id239102435" target="_blank">
                    <img src={VkIcon} alt="Вконтакте" />
                </a>
                <a href="https://t.me/amirganizhev" target="_blank">
                    <img src={TelegramIcon} alt="Телеграмм" />
                </a>
                <a href="mailto:ganizhev.amir@mail.ru" target="_blank">
                    <img src={EmailIcon} alt="@mail" />
                </a>
                <a href="https://github.com/amirganizhev?tab=repositories" target="_blank">
                    <img src={GithubIcon} alt="Github" />
                </a>
            </div>
        </div>
    )

}

export default AboutMe;