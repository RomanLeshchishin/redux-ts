import {initialState, userAction, userActions, userState} from "../../types/user";

export const userReducer = (state = initialState, action: userAction):userState => {
    switch (action.type) {
        case userActions.FETCH_USERS:
            return {loading: true, error: null, users: []}
        case userActions.FETCH_USERS_SUCCESS:
            return {loading: false, error: null, users: action.payload}
        case userActions.FETCH_USERS_ERROR:
            return {loading: false, error: action.payload, users: []}
        default:
            return state
    }
}
