import React from "react";
import s from "./Footer.module.css"
import style from "../Header/Header.module.css";
import {Link} from "react-scroll";


const Footer = (props) => {
    return (
        <div>
            <footer className={s.Footer}>
                <div className={s.Container}>
                    <nav className={s.NavigationMenu}>
                        <div className={style.Nav}>
                            <Link to="section1"
                                  spy={true}
                                  smooth={true}
                                  duration={1000}>Главная</Link>
                        </div>
                        <div className={s.Services}>
                            <Link to="section2"
                                  spy={true}
                                  smooth={true}
                                  duration={1000}>Услуги</Link>
                        </div>
                        <div className={s.Partners}>
                            <Link to="section3"
                                  spy={true}
                                  smooth={true}
                                  duration={1000}>Партнеры</Link>
                        </div>
                        <div className={s.NavButton}>
                            <Link to="section4"
                                  spy={true}
                                  smooth={true}
                                  duration={1000}>Отзывы</Link>
                        </div>
                        <div className={s.NavButton}>
                            <Link to="section5"
                                  spy={true}
                                  smooth={true}
                                  duration={1000}>Контакты</Link>
                        </div>
                    </nav>
                </div>
            </footer>
        </div>
)
}
export default Footer;