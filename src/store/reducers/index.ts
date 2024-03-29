import {combineReducers} from "redux";
import {userReducer} from "./userReducer";

export const rootReducer = combineReducers({
    user: userReducer
})

export type RootStore = ReturnType<typeof rootReducer>
