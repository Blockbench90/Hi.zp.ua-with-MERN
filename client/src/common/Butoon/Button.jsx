import React from "react";
import s from "./Button.module.css";
import {NavLink} from "react-router-dom";

/* стандартная кнопка */
const Button = ({route,title}) => {
    return (
        <div className={s.wrapper}>
            <NavLink to={route || ''}>
                    <div className={s.title}>
                        <span>{title}</span>
                    </div>
            </NavLink>
        </div>
    )
}
export default Button;

/* звонилка */
export const ButtonPhone = ({phone, title }) => {
    return (
        <div className={s.wrapper}>
                <a href={phone || "#"}>
                    <div className={s.title}>
                        <span>{title}</span>
                    </div>
                </a>
        </div>
    )
};
