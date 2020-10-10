import React from "react";
import s from "./Partners.module.css"


const Content = ({title, content}) => {
    return (
        <div>
            <div className={s.ContentBlock}>
                <h3>{title}</h3>
                <p>{content}</p>
            </div>
        </div>
    )
}

const Partners = (props) => {
    return (
        <div className={s.Wrapper}>
            <div className={s.Container}>
                <div className={s.ContentInner}>
                    <div className={s.TopContent}>
                        <div className={s.TopLeftBlock}>
                            <Content title={"Сборка"} content={"Как захотите, и за сколько захотите! Ваше желание для нас закон"}/>
                        </div>
                        <div className={s.TopRightBlock}>
                            <Content title={"Модернизация"} content={"Сделаем из Москвича - Tesla вместе! Только скажите какого цвета"}/>
                        </div>
                    </div>
                    <div className={s.BottomContent}>
                        <div className={s.BotLeftBlock}>
                            <Content title={"Адекватные цены"} content={"У нас вы найдете самые низкие цены, будь то телефон или двигатель самолета"}/>
                        </div>
                        <div className={s.BotRightBlock}>
                            <Content title={"Честный ремонт"} content={"Гарантия на ремонт, а если вдруг, исправим за свой счет"}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Partners;