import React, {useState} from "react";
import s from "./Assembly.module.css";
import Button from "../../common/Butoon/Button";
import komp1 from "../../assets/img/Abaut/Assambly/komp1.png";
import komp2 from "../../assets/img/Abaut/Assambly/komp2.png";
import komp3 from "../../assets/img/Abaut/Assambly/komp3.png";
import komp4 from "../../assets/img/Abaut/Assambly/komp4.png";
import Modal from "../Modal/Modal";
import Parallax from "../Parallax/Parallax";

export const PostToLeftSide = ({content, title}) => {
    return (
            <div className={s.Content}>
                <h3>{title}</h3>
                <p>{content}</p>
            </div>
    )
}
export const PostToRightSide = ({content, title}) => {
    return (
            <div className={s.Content}>
                <h3>{title}</h3>
                <p>{content}</p>
            </div>
    )
}
const ImgWrapper = ({photo}) => {
    return (
        <div>
            <img src={photo} alt=""/>
        </div>
    )
}
const Assembly = (props) => {
    const [modal, setModal] = useState(false)
    const toggle = () => {
        return setModal(false)
    }
    return (
        <div className={s.Wrapper}>
            <Parallax/>
            <div className={s.Container}>
                {modal && <Modal toggle={toggle} title="Поздравляю! Вы ВЫИГРАЛИ!!!!!!" size="1%"
                                 textWin="Мне бы такую работу, чтобы поменьше работы."/>}
                <div className={s.Assembly}>
                    <div className={s.Block}>
                        <PostToLeftSide title="Собрать новый ПК" content="
                    Мы можем собрать для Вас новый компьютер,
                     исходя из ваших желаний, предпочтений и,
                      естественно, кошелька. Весь процесс сборки чем-то схож с заказом вина в ресторане,
                       где мы выполняем роль учтивого и всезнающего сомелье с единственным отличием!
                        Мы не будем пытаться продать самую дорогую бутылку, мы приложим весь опыт и знания,
                         чтобы подобрать оптимальный вариант, специально под Вас. Далее последует процесс «готовки»:
                          непосредственно сборка, установка нужного софта (программ), тесты, доставка (если потребуется), и как минимум три года гарантии."/>

                        <PostToLeftSide title="Модернизировать старый ПК" content="Можно не прибегать к сборке нового компьютера,
                     если старый еще борозды не портит, а всего-навсего требует небольшого усовершенствования.
                      Зачем покупать новый, если блок питания сбоит. Меняем его, опять-таки, только из всеобщего согласия и нашего опыта,
                     и наслаждаемся дальнейшей работой."/>

                    </div>
                </div>
                <div className={s.Modernization}>
                    <div className={s.Block}>

                        <PostToRightSide title="Помощь в выборе"
                                         content="Решили купить новый ноутбук или собрать ПК,
                                          пришли в магазин и ваши глаза разошлись по сторонам
                                           от невообразимого ассортимента, а голова пошла кругом,
                                            когда принялись изучать характеристики, чтобы не переплатить
                                             и купить нужное. Если узнали в этих строках себя, тогда знайте
                                              еще кое-что, Вы не одни. К нам очень часто обращаются за такого
                                               рода помощью и это нормально. Мы считаем, что изучать все нюансы
                                                технического мира перед покупкой вашего бедующего устройства, не
                                                 только бессмысленно, но и нецелесообразно. И нужно понимать, все
                                                  очень быстро меняется, и быть в курсе всех it-новинок и стабильности
                                                   их работы могут знать только люди который работают в этой сфере или
                                                    просидеть не один день читая статьи и форумы. Предоставьте это нам,
                                                     ведь мы живем, дышим и наслаждаемся своей работой и с радостью поможем Вам в выборе."/>

                        <PostToRightSide title="Помощь в продаже старого ПК"
                                         content="Не беда, и на этот вопрос у нас ответ имеется.
                                      Мы ценим и с огромным уважением относимся ко всем нашим клиентам,
                                       поэтому поможем с реализацией старого. Вместе примем решение о цене,
                                        выставим на витрину, и в случае продажи, что бывает в 99% случаев,
                                         возвращаем честно заработанные Вами деньги. Зачем оно нам надо? Можете вы спросить.
                                          Но все очень просто. Довольный клиент, всегда посоветует нас своим друзьям."/>

                    </div>
                </div>
            </div>
            <div className={s.Gallery} onClick={() => setModal(true)}>
                <ImgWrapper photo={komp1}/>
                <ImgWrapper photo={komp2}/>
                <ImgWrapper photo={komp3}/>
                <ImgWrapper photo={komp4}/>
                <ImgWrapper photo={komp1}/>
                <ImgWrapper photo={komp2}/>
                <ImgWrapper photo={komp3}/>
                <ImgWrapper photo={komp4}/>
            </div>
            <div className={s.BackButton}>
                <Button title="Вернуться" to="/"/>
            </div>
        </div>
    )
}
export default Assembly;