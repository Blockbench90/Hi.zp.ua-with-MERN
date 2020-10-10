import {createStore, combineReducers, applyMiddleware} from 'redux';
import { reducer as formReducer } from 'redux-form';
import commentsReducer from "./comments-reducer";
import thunk from "redux-thunk";

let reducers = combineReducers({
    commentsPage: commentsReducer,
    form: formReducer
})
let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;


export default store;
