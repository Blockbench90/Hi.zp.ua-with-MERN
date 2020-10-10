import React from "react";
import s from "./Parallax.module.css";

const parallaxRef = React.createRef()
const parallax = (e) => {
    // parallaxRef.current.style.transform = `translateX(${e.clientX / 50}px)`;
}

document.addEventListener("mousemove", parallax)

const Parallax = () => {
    return (
        <div className={s.ParallaxWrapper}>
            <div className={s.Parallax} ref={parallaxRef}>
            </div>
        </div>
    )
}
export default Parallax;