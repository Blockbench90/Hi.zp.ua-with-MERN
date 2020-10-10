import React from "react";
import s from "./HeaderContent.module.css"
import HeaderSection from "./Header-Section";
import BackgroundVideo from "../../common/BackgroundVideo/BackgroundVideo";

const HeaderContent = (props) => {
    return (
        <div>
            <div className={s.HeaderTop}> {/* секция с z-index, контент, визитка над видео */}
                <HeaderSection/>
            </div>
            <div>   {/* само видео, сжатое, легкое, информативное*/}
                <BackgroundVideo/>
            </div>
        </div>
    )
}
export default HeaderContent;
