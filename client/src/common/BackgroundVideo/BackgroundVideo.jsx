import React from "react";
import video from "../../assets/img/Abaut/BigHac.mp4";
import media from "../../assets/img/Abaut/smoll3.mp4";
import s from "./BackgroundVideo.module.css"

class BackgroundVideo extends React.Component{
    render() {
        return (
            <div className={s.VideoInner}>
                <div className={s.BigMovie}>
                   <video autoPlay={true} loop={true} muted={true} id="background-video" className={s.Video}>
                        <source src={video} type="video/mp4"/>
                        <source src={video} type="video/ogg"/>
                        Ваш браузер не поддерживает формат этого видео
                    </video>
                </div>
                <div className={s.MediaInner}>
                    <video autoPlay={true} loop={true} muted={true} id="background-video" className={s.Video}>
                        <source src={media} type="video/mp4"/>
                        <source src={media} type="video/ogg"/>
                        Ваш браузер не поддерживает формат этого видео
                    </video>
                </div>
            </div>
        )
    }
}
export default BackgroundVideo;