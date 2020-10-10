import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s from "./PartnersSlider.module.css"


export default class PartnersSlider extends React.Component {
    render() {
        let settings = {
            dots: false,
            fade: true,
            infinite: true,
            speed: 600,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplaySpeed: 3000,
            autoplay: true
        };
        return (
            <div className={s.Wrapper}>
                <Slider {...settings}>
                    <div className={s.first}>
                    </div>
                    <div className={s.two}>
                    </div>
                    <div className={s.three}>
                    </div>
                    <div className={s.For}>
                    </div>
                    <div className={s.Five}>
                    </div>
                    <div className={s.Six}>
                    </div>
                    <div className={s.Seven}>
                    </div>
                </Slider>
            </div>
        );
    }
}