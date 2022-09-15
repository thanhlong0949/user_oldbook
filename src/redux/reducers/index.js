import hobbyReducer from "./hobby";
import { combineReducers } from "redux";
import { userReducer } from "react";

const rootReducer = combineReducers({
    hobby: hobbyReducer,
    user: userReducer,
});

export default rootReducer;