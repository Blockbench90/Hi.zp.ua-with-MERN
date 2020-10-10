import React from "react";
import s from "./AboutUs.module.css"
import Button from "../../common/Butoon/Button";
import Parallax from "../Parallax/Parallax";

const Post = ({title, route}) => {
    return (
        <div className={s.PostInner}>
            <div>
                <h4>{title}</h4>
            </div>
            <div className={s.PostBtn}>
                <Button title={"Подробнее..."} route={route}/>
            </div>
        </div>
    )
}
const AboutUs = (props) => {
    return (
        <div className={s.Wrapper}>
            <Parallax/>
            <div className={s.Content}>
                <div className={s.ContentInner}>
                    <div className={s.TopContent}>
                        <div className={s.LeftBlock}>
                            <div className={s.tLbInner}>
                                <Post title={"Ремонт"} route="/fix"/>
                            </div>
                        </div>
                        <div className={s.RightBlock}>
                            <div className={s.tRbInner}>
                                <Post title={"Обслуживание"} route="/replacement"/>
                            </div>
                        </div>
                    </div>
                    <div className={s.CenterContent}>
                        <div className={s.LeftBlock}>
                            <div className={s.cLbInner}>
                                <Post title={"Программы"} route="/support"/>
                            </div>
                        </div>
                        <div className={s.RightBlock}>
                            <div className={s.cRbInner}>
                                <Post title={"Сборка ПК"} route="/assembly"/>
                            </div>
                        </div>
                    </div>
                    <div className={s.ButtonContent}>
                        <div className={s.LeftBlock}>
                            <div className={s.bLbInner}>
                                <Post title={"Вызов мастера"} route="/master"/>
                            </div>
                        </div>
                        <div className={s.RightBlock}>
                            <div className={s.bRbInner}>
                                <Post title={"Для чайников"} route="/zero"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutUs;