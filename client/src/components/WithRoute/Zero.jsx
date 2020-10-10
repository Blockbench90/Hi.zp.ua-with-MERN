import React from "react";
import s from "./Zero.module.css";
import zero1 from "../../assets/img/Abaut/zero1.png";
import zero2 from "../../assets/img/Abaut/zero2.png";
import zero3 from "../../assets/img/Abaut/zero3.png";
import zero4 from "../../assets/img/Abaut/zero4.png";
import Button from "../../common/Butoon/Button";
import Parallax from "../Parallax/Parallax";

const ImgWrapper = ({photo}) => {
    return <div>
        <img src={photo} alt=""/>
    </div>
}

const Zero = () => {
    return (
        <div className={s.Wrapper}>
            <Parallax/>
            <div className={s.Container}>
                <div className={s.Content}>
                    <div>
                    <p>Не всем дано быть опытными пользователями современной техники,
                        так что переживать тут не о чем.  Этот раздел создан именно для
                        такой категории людей. Перед тем как звонить нам, сделайте несколько
                        рекомендаций. В 90% случаев простые шаги помогают исправить большинство
                        проблем.</p>
                    </div>
                    <div>
                        <b>Проверьте надежность подключения кабелей.</b>
                    </div>
                    <div className={s.Gallery}>
                        <ImgWrapper photo={zero1}/>
                        <ImgWrapper photo={zero2}/>
                        <ImgWrapper photo={zero3}/>
                        <ImgWrapper photo={zero4}/>
                    </div>
                    <div>
                        <b>Перезагрузите ваше устройство.</b>
                    </div>
                    <div>
                    <p>Выключите, подождите 5 минут, и включите снова.
                        Если ваше устройство питается от сети, после выключения,
                        вытяните вилку из розетки и также подождите 5 минут.
                        Если это не помогло, смело звоните нам.</p>
                    </div>
                    <div><b>Возник вопрос, первым делом прочтите в
                        <a href="https://www.google.com">Google</a>
                        или посмотрите на
                        <a href="https://www.youtube.com/">YouTube</a>.</b></div>
                    <div>
                    <p>Не стоит сразу же звонить нам, первым делом введите ваш вопрос в поисковое
                        поле и прочтите хотя-бы первых пять ответов и только потом,
                        если не удалось решить проблему, звоните нам.</p>
                    </div>
                    <div><b>Вопрос: У меня не включается, сколько стоит ремонт? </b></div>
                    <div><b>Вы должны понимать, нужна диагностика, чтобы понять причину и устранить.</b></div>
                </div>
            </div>
            <div className={s.Button}>
                <Button title="Вернуться" to="/"/>
            </div>
        </div>
    )
}
export default Zero;