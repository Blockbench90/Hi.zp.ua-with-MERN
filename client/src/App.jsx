import React from 'react';
import './App.css';
import 'normalize.css';
import Header from "./components/Header/Header";
import AboutUs from "./components/AboutUs/AboutUs";
import PartnersSlider from "./components/Slist/PartnersSlider";
import Partners from "./components/Partners/Partners";
import HeaderContent from "./components/Header-Content/HeaderContent";
import {Route, Switch} from "react-router-dom";
import Fix from "./components/WithRoute/Fix";
import Replacement from "./components/WithRoute/Replacement";
import Assembly from "./components/WithRoute/Assembly";
import Support from "./components/WithRoute/Support";
import Master from "./components/WithRoute/Master";
import Zero from "./components/WithRoute/Zero";
import MapContent from "./components/MapSection/MapContent";
import HeaderMenu from "./components/HeaderMenu/HeaderMenu";
import Gallery from "./components/Gallery/Gallery";
import CommentsInner from "./components/Comments/CommentsInner/CommentsInner";


const App = () => {
    return (
        <div className="App-Wrapper">
            <div className="Container">
                <section className="Header" id="section1">
                    <div className="NormalHeader">
                        <Header/>  {/* фиксированный хедер */}
                    </div>
                    <div className="HeaderButton">
                        <HeaderMenu/> {/* адаптивный хедер на 900px */}
                    </div>
                    <HeaderContent/>  {/* видео как бекграунд и кондент над ним */}
                </section>
                <section className="AboutUs" id="section2">
                    <Switch>
                        <Route path='/' exact component={() => <AboutUs/>}/> {/* Обертка для роутов */}

                        <Route path='/fix' render={() => <Fix/>}/>  {/* Ремонт */}
                        <Route path='/replacement' render={() => <Replacement/>}/>  {/* Обслуживание */}
                        <Route path='/support' render={() => <Support/>}/>  {/* Программы */}
                        <Route path='/assembly' render={() => <Assembly/>}/>    {/* Сборка */}
                        <Route path='/master' render={() => <Master/>}/>    {/* Вызов мастера */}
                        <Route path='/zero' render={() => <Zero/>}/>    {/* Неопытный пользователь */}
                    </Switch>
                </section>
                <section className="Partners" id="section3">    {/* Обертка для отдела мини-визитки со слик-слайдером */}
                    <div className="PartnersContent">
                        <Partners/> {/* Контентная часть */}
                    </div>
                    <div className="PartnersSlider">
                        <PartnersSlider/> {/* Собственно сам слайдер из 7 фото */}
                    </div>
                </section>
                <section className="Gallery" id="section4">
                    <Gallery/>  {/* Галерея фоток */}
                </section>
                <section className="Map" id="section5">
                    <CommentsInner/>   {/* Контакты */}
                </section>
                <section className="Map" id="section6">
                    <MapContent/>   {/* Контакты */}
                </section>
            </div>
        </div>
    );
}
export default App;
