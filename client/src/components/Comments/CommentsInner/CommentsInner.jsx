import React from "react";
import s from "./CommentsInner.module.css"
import CommentsInput from "./InputComments/CommentsInput";
import CommentsText from "./TextComments/CommentsText";




const CommentsInner = () => {
    return (
        <div className={s.Wrapper}>
            <div className={s.Container}>
                <div className={s.CommentsInput}>
                    <CommentsInput/>
                </div>
                <div className={s.CommentsText}>
                    <CommentsText/>
                </div>
            </div>
        </div>
    )
}
export default CommentsInner;