import React from "react";
import s from "./Master.module.css";
import Button from "../../common/Butoon/Button";
import master from "../../assets/img/Abaut/Call_Master2.png"
import Parallax from "../Parallax/Parallax";


const Master = () => {
    return (
        <div className={s.Wrapper}>
            <Parallax/>
            <div className={s.Container}>
                <div className={s.Content}>
                    <ul>
                        <li>Вызов мастера и диагностика на дому бесплатно, в случае выполнения любых робот или ремонта.</li>
                        <li>Если вам нужно чтобы мастер просто приехал потратил свое время, сделал диагностику и сказал вам
                            причину поломки и стоимость ее устранения, без выполнения работ, то это стоит 150грн.
                            <span>Но так же вы должны понимать что определенные работы не могут быть выполнены у вас дома, так как это занимает много
                                    времени (6-12часов), что может принести дискомфорт и вам и мастеру) для этого нужно приносить к нам в сервис.</span></li>
                        <li>Если у вас нет такой возможности, мы можем забрать ваше устройство к нам в сервис а так же привезти его обратно.
                            (услуга доставки обсуждается индивидуально в зависимости от района и ситуации).</li>
                    </ul>
                    <div className={s.Button}>
                        <Button title="Вернуться" to="/"/>
                    </div>
                </div>
                <div className={s.ButtonImg}>
                    <img src={master} alt=""/>
                </div>
            </div>
        </div>
    )
}
export default Master;