import React from "react";
import style from "./HeaderSection.module.css";
import logo from "../../assets/img/logo/logo11.png";


const HeaderSection = () => {
    return (
        <div className={style.Wrapper}>
            <div className={style.Container}>
                <div className={style.HeaderTitle}>
                    <div>
                        <img src={logo} alt=""/>
                    </div>
                    <div>
                        <div className={style.Title}>
                            <b>Hacker-Inside</b>
                        </div>
                    </div>
                </div>
                <div className={style.Content}>
                    <div className={style.Info}>
                        <div>
                            <h1>Ремонт компьютеров</h1>
                            <p>в Запорожье</p>
                        </div>
                        <div className={style.Visit}>
                            <ul>
                                <li>Не работает? – Починим!</li>
                                <li>Не включается? – Включим!</li>
                                <li>Не знаете как? – Подскажем!</li>
                                <li>Дорого? – Обсудим!</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderSection;