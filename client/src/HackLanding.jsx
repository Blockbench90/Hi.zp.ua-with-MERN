import React, {useState} from "react";
import App from "./App";
import Preloader from "./common/Preloader/Preloader";

//Эта компонента нужна как загрузчик. 4 секунды для загружки данных, чтобы небыло постепенных подгрузок
const HacLanding = (props) => {
    const [isFetch, setIsFetch] = useState(true);
    setTimeout(() => {
        setIsFetch(false)
    }, 500)
    return (<div>
        <div className="PreloaderUnderWindow">
            {isFetch && <Preloader/>}
        </div>
        <App/>
    </div>)
}
export default HacLanding;