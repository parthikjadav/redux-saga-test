import { combineReducers } from "redux";
import userReducer from "./user/reducer/reducer";

const rootReducer = combineReducers({
    userReducer,
})

export default rootReducer;