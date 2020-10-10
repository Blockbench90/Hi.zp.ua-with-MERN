import React from "react";
import s from "./MapContent.module.css";
import life from "../../assets/img/logo/life.png";
import vodafone from "../../assets/img/logo/vodafone.png";
import kyivstar from "../../assets/img/logo/kyivstar.png";
import map from "../../assets/img/logo/MapIcon.png";
import instagram from "../../assets/img/logo/insta.png";
import telegram from "../../assets/img/logo/tetegram.png";
import viber from "../../assets/img/logo/viber.png";
import Max from "../../assets/img/MapContent/max_photo.png";
import {ButtonPhone} from "../../common/Butoon/Button";
import Anonimys from "../../assets/img/MapContent/Yura_photo.png";


const MapContent = (props) => {
    return <div className={s.Wrapper}>
        <div className={s.Container}>
            <div>
                <div className={s.PhoneBox}>
                    <div><img src={kyivstar} alt=""/></div>
                    <div><a href="tel:+380 97 910 79 01">+380 97 910 79 01</a></div>
                </div>
                <div className={s.PhoneBox}>
                    <div><img src={vodafone} alt=""/></div>
                    <div><a href="tel:+380950718593">+380 95 071 85 93</a></div>
                </div>
                <div className={s.PhoneBox}>
                    <div><img src={life} alt=""/></div>
                    <div><a href="tel:+380933160989">+380 93 316 09 89</a></div>
                </div>
                <div className={s.Society}>
                    <div><a href="https://www.instagram.com/maxim.zpua/"><img src={instagram} alt=""/></a></div>
                    <div><a href="https://t.me/Hacersinside"><img src={telegram} alt=""/></a></div>
                    <div><a href="viber://chat?number=+380964237550"><img src={viber} alt=""/></a></div>
                    <div className={s.MapBox}>
                        <div><img src={map} alt=""/></div>
                        <div><a href="https://www.google.com/maps/place/Hackers+inside/@47.7832345,35.1818275,17z/data=!3m1!4b1!4m5!3m4!1s0x40dc5ef9062555f9:0xa5d2e3fac23e0551!8m2!3d47.7832345!4d35.1840162">
                            Посмотреть на карте</a></div>
                    </div>
                </div>
                <div className={s.WorkTime}>
                    <b>Мы работаем:</b>
                    <ul>
                        <li>Пн-Пт: с 10 до 17</li>
                        <li>Сб-Вс: с 10 до 15</li>
                    </ul>
                </div>
                <div className={s.PhotoInfo}>
                    <div className={s.MaxBoxImg}>
                        <img src={Max} alt=""/>
                        <div className={s.Btn}>
                            <ButtonPhone title={"Максим"} phone={"tel:+380979107901"}/>
                        </div>
                    </div>
                    <div>
                        <img src={Anonimys} alt=""/>
                        <div className={s.BtnUra}>
                            <ButtonPhone title={"Юра"} phone={"tel:+380987334951"}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default MapContent;