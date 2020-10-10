import React, {useState} from "react";
import s from "./WithRoute.module.css";
import Button from "../../common/Butoon/Button";
import scrin from "../../assets/img/contentImg/leptop.png";
import scrin1 from "../../assets/img/contentImg/leptop1.png";
import scrin2 from "../../assets/img/contentImg/leptop2.png";
import Modal from "../Modal/Modal";
import Parallax from "../Parallax/Parallax";

const Fix = () => {
    const [modal, setModal] = useState(false)
    const toggle = () => {
        return setModal(false)
    }
    return (
        <div className={s.Wrapper}>
            <Parallax/>
            <div className={s.Container}>
                <div className={s.Info}>
                    {modal && <Modal toggle={toggle} title="Поздравляю! Вы ВЫИГРАЛИ!!!!!!" size="50%"
                                     textWin="И шо я в тебя такой влюбленный."/>}
                    <div className={s.Title}>
                        <h3>Раздавили экран? Залили жидкостью? Уронили? Ноутбук не включается без всякой причины?</h3>
                    </div>
                    <div className={s.Content}>
                        <p>
                            Не стоит отчаиваться! Даже если некие горе-умельцы уже посоветовали Вам выкинуть и купить
                            новый,
                            есть смысл обратиться к нам за консультацией или диагностикой, ведь это бесплатно и Вы
                            ничего не теряете.
                            Опыт, необходимое оборудование, налаженные связи с поставщиками комплектующих, позволяют нам
                            в сжатые сроки
                            произвести диагностику и если это целесообразно, ремонт.На проведенные работы по ремонту
                            дается гарантия до 3-х месяцев,
                            а на некоторые установленные комплектующие (память, винчестер HDD, привод DVD) гарантия от 1
                            года до 3-х лет!
                        </p>
                        <p>Вот короткий перечень, самых частовстечаемых проблем, с которыми мы сталкиваемся каждый
                            день:</p>
                    </div>
                    <div className={s.List}>
                        <ul>
                            <li>замена матрицы экрана</li>
                            <li>замена клавиатуры (или чистка, отмывка залитой вашей)</li>
                            <li>замена аккумулятора (оригинал или лицензия)</li>
                            <li>замена винчестера HDD, привода DVD</li>
                            <li>замена оперативной памяти</li>
                            <li>замена шлейфов (матрицы, клавиатуры)</li>
                            <li>прошивка BIOS</li>
                            <li>сброс забытого пароля BIOS</li>
                            <li>чистка системы охлаждения ноутбука и замена термоинтерфейсов</li>
                            <li>ремонт материнских плат ноутбука, включая пересадку чипов северного июжного мостов</li>
                            <li>ремонт ноутбучных видеокарт, включая пересадку чипа видеокарты и чипов
                                видеопамяти
                            </li>
                            <li>ремонт подсветки матрицы, включая замену ламп подсветки</li>
                            <li>любые другие виды ремонта (перепайка разъемов, замена WI-Fi модуля и др.)</li>
                        </ul>
                    </div>
                </div>
                <div className={s.Gallery}>
                    <div>
                        <img src={scrin} alt=""/>
                    </div>
                    <div>
                        <img src={scrin1} alt=""/>
                    </div>
                    <div onClick={()=> setModal(true)}>
                        <img src={scrin2} alt=""/>
                    </div>
                </div>
            </div>
            <div className={s.BackButton}>
                <Button title="Вернуться" to="/"/>
            </div>
        </div>
    )
}
export default Fix;