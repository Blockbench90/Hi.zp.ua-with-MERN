import React from "react";
import s from "./CommentsProps.module.css";

export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={s.InputWrapper + ' ' + (hasError ? s.error : "")}>
            <input {...input} {...props} />
            {hasError && <span>"Ой-йой, что-то не то"</span>}
        </div>
    )
}

export const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={s.TextareaWrapper + ' ' + (hasError ? s.error : "")}>
            <div>
            <textarea {...input} {...props}/>
            </div>
            {hasError && <span>"Ой-йой, коль взялся, доделай"</span>}
        </div>
    )
}