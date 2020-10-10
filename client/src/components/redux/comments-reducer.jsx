import * as axios from 'axios'

const ADD_COMMENT = "ADD-COMMENT"
let initialState = {
    comments: [],
    isLoading: false
}
const commentsReducer = (state= initialState, action) => {
    switch (action.type) {
        case ADD_COMMENT: {
            debugger
            return { comments: [...action.newComment], isLoading: true}
        }
        default:
            return state;
    }
}

export const sendComment = (newComment) => ({type: ADD_COMMENT, newComment})
export const getComments = (url) => {
    debugger
    return (dispatch) => {
        axios.get(url)
            .then(users =>{
                debugger
                dispatch(sendComment(users.data))
            })
    }
}
export const postComments = (formData) => {
    debugger
    return (dispatch) => {
        axios.post('/api/users', formData)
            .then(response => {
                debugger
                if (response.status === 200) {
                    dispatch(getComments('/api/users'))
                }
            })
    }
}

export default commentsReducer;