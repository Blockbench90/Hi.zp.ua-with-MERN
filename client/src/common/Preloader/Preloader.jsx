import React from "react";
import "./Preloader.css";
import logo from "../../assets/img/logo/logo11.png"


const Preloader = (props) => {
    return <div className="Preloader">
        <div className="PreloaderWrapper">
            <div>
                <img src={logo} alt=""/>
            </div>
            <div className="PreloaderContainer">
                <p>З</p>
                <p>А</p>
                <p>Г</p>
                <p>Р</p>
                <p>У</p>
                <p>З</p>
                <p>К</p>
                <p>А</p>
            </div>
        </div>
    </div>
}
export default Preloader;