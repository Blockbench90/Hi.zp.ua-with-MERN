import React, {useState} from "react";
import s from "./Support.module.css";
import windows from "../../assets/img/contentImg/Windows.png";
import linux from "../../assets/img/contentImg/Linux.png";
import macos from "../../assets/img/contentImg/MacOS.png";
import android from "../../assets/img/contentImg/Android.png";
import ios from "../../assets/img/contentImg/iOS.png";
import avg from "../../assets/img/contentImg/antivirus/360.png";
import avast from "../../assets/img/contentImg/antivirus/avast.png";
import beer from "../../assets/img/contentImg/antivirus/beer.png";
import drweb from "../../assets/img/contentImg/antivirus/Dr.web.png";
import eset from "../../assets/img/contentImg/antivirus/eset.png";
import kasper from "../../assets/img/contentImg/antivirus/Kasper.png";
import mack from "../../assets/img/contentImg/antivirus/Mack.png";
import panda from "../../assets/img/contentImg/antivirus/panda.png";
import exel from "../../assets/img/contentImg/antivirus/pregrams/exel.png";
import google from "../../assets/img/contentImg/antivirus/pregrams/google.png";
import mediaget from "../../assets/img/contentImg/antivirus/pregrams/mediaget.png";
import microsoft from "../../assets/img/contentImg/antivirus/pregrams/microsoft.png";
import mozilla from "../../assets/img/contentImg/antivirus/pregrams/mozilla.png";
import office from "../../assets/img/contentImg/antivirus/pregrams/office.png";
import opera from "../../assets/img/contentImg/antivirus/pregrams/opera.png";
import Photoshop from "../../assets/img/contentImg/antivirus/pregrams/Photoshop.png";
import promierPro from "../../assets/img/contentImg/antivirus/pregrams/promierPro.png";
import skype from "../../assets/img/contentImg/antivirus/pregrams/skype.png";
import telegram from "../../assets/img/contentImg/antivirus/pregrams/telegram.png";
import uTorrent from "../../assets/img/contentImg/antivirus/pregrams/uTorrent.png";
import veber from "../../assets/img/contentImg/antivirus/pregrams/veber.png";
import WinRar from "../../assets/img/contentImg/antivirus/pregrams/WinRar.png";
import Button from "../../common/Butoon/Button";
import Modal from "../Modal/Modal";
import Parallax from "../Parallax/Parallax";

const WrapperForImg = ({img}) => {
    return <div>
        <img src={img} alt=""/>
    </div>
}

const Support = (props) => {
    const [modal, setModal] = useState(false)
    const toggle = () => {
        return setModal(false)
    }
    return (
        <div className={s.Wrapper}>
            <Parallax/>
            <div className={s.Container}>
                {modal && <Modal toggle={toggle} title="Поздравляю! Вы ВЫИГРАЛИ!!!!!!" size="50%"
                                 textWin="Спасибо, я пешком постою."/>}
                <div className={s.Content}>
                    <div className={s.Title}>
                        <h3>Работаем со всеми самыми распространенными операционными системами</h3>
                    </div>
                    <div className={s.Gallery}>
                        <WrapperForImg img={windows}/>
                        <WrapperForImg img={linux}/>
                        <WrapperForImg img={macos}/>
                        <WrapperForImg img={android}/>
                        <WrapperForImg img={ios}/>
                    </div>
                    <div className={s.Antivirus}>
                        <div className={s.Antivirus}>
                            <div className={s.TitleAnt}>
                                <div>
                                    <h4>Установка антивируса</h4>
                                </div>
                            </div>
                            <div className={s.ImgAnt} onClick={() => setModal(true)}>
                                <WrapperForImg img={avg}/>
                                <WrapperForImg img={avast}/>
                                <WrapperForImg img={beer}/>
                                <WrapperForImg img={drweb}/>
                                <WrapperForImg img={eset}/>
                                <WrapperForImg img={kasper}/>
                                <WrapperForImg img={mack}/>
                                <WrapperForImg img={panda}/>
                            </div>
                        </div>
                    </div>
                    <div className={s.Programms}>
                        <div className={s.ProgramsWrapper}>
                            <div className={s.TitleAnt}>
                                <div>
                                    <h4>Програмное сопровождение</h4>
                                </div>
                            </div>
                            <div className={s.ImgPrograms}>
                                <WrapperForImg img={exel}/>
                                <WrapperForImg img={google}/>
                                <WrapperForImg img={mediaget}/>
                                <WrapperForImg img={microsoft}/>
                                <WrapperForImg img={mozilla}/>
                                <WrapperForImg img={office}/>
                                <WrapperForImg img={opera}/>
                                <WrapperForImg img={Photoshop}/>
                                <WrapperForImg img={promierPro}/>
                                <WrapperForImg img={skype}/>
                                <WrapperForImg img={telegram}/>
                                <WrapperForImg img={uTorrent}/>
                                <WrapperForImg img={veber}/>
                                <WrapperForImg img={WinRar}/>
                            </div>
                        </div>
                    </div>
                    <div className={s.BackButton}>
                        <Button title="Вернуться" to="/"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Support;