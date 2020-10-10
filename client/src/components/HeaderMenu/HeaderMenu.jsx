import React, {useState} from "react";
import style from "./HeaderMenu.module.css";
import logo from "../../assets/img/logo/logo11.png";
import master from "../../assets/img/Abaut/Call_Master2.png";
import {Link, animateScroll as scroll} from "react-scroll";
import openImg from "../../assets/img/logo/openMenu.png";
import closeMenu from "../../assets/img/logo/closeMenu.png";
import Slide from 'react-reveal/Slide';


const MenuButton = ({photo}) => {
    return (
        <div className={style.CloseMenu}> {/* Кнопка открытия и закрытия в адаптивном меню */}
            <img src={photo} alt=""/>
        </div>
    )
}
const NavigationMenu = (props) => {
    return (
        <Slide right>
        <div className={style.NavigationWrapper}>
            <div className={style.CloseMenu} onClick={() => {
                props.setMenu(false);
            }}>
                <MenuButton photo={closeMenu}/>
            </div>
            <Slide right cascade >
                <nav className={style.NavigationMenu}>
                    <div className={style.Nav}> {/* параметры перемотки, где duration скорость */}
                        <Link to="section1" spy={true} smooth={true} duration={1000}>Главная</Link>
                    </div>
                    <div className={style.Services}>
                        <Link to="section2" spy={true} smooth={true} duration={1000}>Услуги</Link>
                    </div>
                    <div className={style.Partners}>
                        <Link to="section3" spy={true} smooth={true} duration={1000}>Партнеры</Link>
                    </div>
                    <div className={style.NavButton}>
                        <Link to="section4" spy={true} smooth={true} duration={1000}>Галерея</Link>
                    </div>
                    <div className={style.NavButton}>
                        <Link to="section5" spy={true} smooth={true} duration={1000}>Контакты</Link>
                    </div>
                    <div>
                        <img src={master} alt=""/>
                    </div>
                </nav>
            </Slide>
        </div>
        </Slide>
    )
}


const HeaderMenu = () => {
    const scrollToTop = () => {   /* перемотка в HeaderSection */
        scroll.scrollToTop();
    }
    const [menu, setMenu] = useState(false)

    return (
        <div className={style.Wrapper}>
            <div className={style.Container}>
                <div>
                    <header className={style.HeaderInner}>
                        <div className={style.Logo}>    {/* лого по стандарту мотает вверх */}
                            <img src={logo} alt="Logo" onClick={scrollToTop}/>
                        </div>
                        <div>
                            {menu ? <NavigationMenu setMenu={setMenu}/> :
                                <div className={style.Open} onClick={() => {
                                    setMenu(true)
                                }}>
                                    <MenuButton photo={openImg}/>
                                </div>}
                        </div>
                    </header>
                </div>
            </div>
        </div>
    )
}
export default HeaderMenu;
