import React, {useEffect} from "react";
import s from "./CommentsText.module.css";
import kid from "../../../../assets/img/users/kid.png";
import jungWoman from "../../../../assets/img/users/jungWoman.png";
import Chell from "../../../../assets/img/users/Chell.png";
import Chuwiha from "../../../../assets/img/users/Chuwiha.png";
import BadGay from "../../../../assets/img/users/BadGay.png";
import BadWoman from "../../../../assets/img/users/BadWoman.png";
import Oma from "../../../../assets/img/users/Oma.png";
import Opa from "../../../../assets/img/users/Opa.png";
import TiRex from "../../../../assets/img/users/TiRex.png";
import Baby from "../../../../assets/img/users/Baby.png";
import {connect} from "react-redux";
import {getComments} from "../../../redux/comments-reducer";
import Preloader from "../../../../common/Preloader/Preloader";

const PostWoman = ({name, comment, age, time}) => {
    return (
        <div className={s.PostWrapper}>
            <div className={s.PostContainer}>
                <div className={s.UserDescription}>
                    <b>{name}</b>
                    <p>{comment}</p>
                </div>
                <div className={s.UserPhoto}>
                    <img
                        src={age <= 0 ? Baby : age <= 14 ? jungWoman : age <= 20 ? Chuwiha : age <= 35 ? BadWoman : age <= 100 ? Oma : TiRex}
                        alt=""/>
                    <span>{time}</span>
                </div>
            </div>
        </div>
    )
}

const PostMan = ({name, comment, age, time}) => {
    return (
        <div className={s.PostWrapper}>
            <div className={s.PostContainer}>
                <div className={s.UserPhoto}>
                    <img
                        src={age <= 0 ? Baby : age <= 14 ? kid : age <= 20 ? Chell : age <= 35 ? BadGay : age <= 100 ? Opa : TiRex}
                        alt=""/>
                    <span>{time}</span>
                </div>
                <div className={s.UserDescription}>
                    <b>{name}</b>
                    <p>{comment}</p>
                </div>
            </div>
        </div>
    )
}

const CommentsText = ({comments, isLoading, getComments}) => {
    debugger
    useEffect(() => {
        getComments('/api/users')
    }, [])
    let post = comments.reverse().map(p => p.sex === "male" ?
            <PostMan name={p.name} age={p.age} comment={p.comment} key={p._id} time={p.time}/>
            : <PostWoman name={p.name} age={p.age} comment={p.comment} key={p._id} time={p.time}/>)
    return (
        <div className={s.Wrapper}>
            <div className={s.Container}>
                {!isLoading ? <Preloader/> : post}
            </div>
        </div>
    )
}

let mapStateToProps = (state) => ({
    comments: state.commentsPage.comments,
    isLoading: state.commentsPage.isLoading
})

export default connect(mapStateToProps, {getComments})(CommentsText);

