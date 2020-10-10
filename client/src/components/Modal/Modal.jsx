import React from 'react';
import ReactDOM from 'react-dom';
import style from './Modal.module.css'
import close from "../../assets/img/contentImg/close.png"
import down from "../../assets/img/contentImg/down.png"

class Modal extends React.Component {
    closeModal = this.props.toggle

    componentWillMount() {
        this.root = document.createElement('portal')
        document.body.appendChild(this.root)
    }
    componentWillUnmount() {
        document.body.removeChild(this.root)
    }
    render() {
        return ReactDOM.createPortal(
            <div className={style.Overlay} onClick={this.closeModal}>
                <div className={style.Modal}>
                    <div className={style.InnerModal}>
                        <div className={style.Top}>
                            <h3>{this.props.title}</h3>
                            <span>Назовите пароль при посищении</span>
                            <img src={down} alt=""/>
                        </div>
                        <div className={style.ImgInner}>
                            <img src={close} alt="close"/>
                        </div>
                    </div>
                    <div className={style.Bottom}>
                        <p>{this.props.textWin}</p>
                        <span>И получите гарантированную скидку <b>{this.props.size}</b></span>
                        <button onClick={this.closeModal}>Ясно, Понятно</button>
                    </div>
                </div>
            </div>,
            this.root
        );
    }
}

export default Modal;